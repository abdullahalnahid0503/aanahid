<template>
  <div class="fixed inset-0 -z-10 overflow-hidden bg-black">
    <canvas
      ref="canvas"
      class="absolute inset-0 w-full h-full"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animationId: number | null = null

interface Star {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
}

interface ShootingStar {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  opacity: number
  active: boolean
}

let stars: Star[] = []
let shootingStars: ShootingStar[] = []
let lastShootingStarTime = 0

const createStars = (width: number, height: number) => {
  stars = []
  const starCount = Math.floor((width * height) / 5000)

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2,
      speedX: (Math.random() - 0.5) * 0.1,
      speedY: (Math.random() - 0.5) * 0.1,
      opacity: Math.random() * 0.5 + 0.3,
      twinkleSpeed: Math.random() * 0.002 + 0.001,
      twinklePhase: Math.random() * Math.PI * 2
    })
  }
}

const createShootingStar = (width: number, height: number) => {
  const fromTop = Math.random() > 0.5
  return {
    x: fromTop ? Math.random() * width : width,
    y: fromTop ? 0 : Math.random() * height * 0.5,
    length: Math.random() * 80 + 50,
    speed: Math.random() * 3 + 4,
    angle: fromTop ? Math.PI / 4 + (Math.random() - 0.5) * 0.5 : Math.PI / 3,
    opacity: 1,
    active: true
  }
}

const animate = () => {
  if (!ctx || !canvas.value) return

  const width = canvas.value.width
  const height = canvas.value.height
  const now = Date.now()

  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
  ctx.fillRect(0, 0, width, height)

  stars.forEach((star) => {
    star.x += star.speedX
    star.y += star.speedY

    if (star.x < 0) star.x = width
    if (star.x > width) star.x = 0
    if (star.y < 0) star.y = height
    if (star.y > height) star.y = 0

    star.twinklePhase += star.twinkleSpeed
    const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7

    const gradient = ctx!.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size)
    gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * twinkle})`)
    gradient.addColorStop(0.4, `rgba(147, 197, 253, ${star.opacity * twinkle * 0.5})`)
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

    ctx!.fillStyle = gradient
    ctx!.beginPath()
    ctx!.arc(star.x, star.y, star.size, 0, Math.PI * 2)
    ctx!.fill()
  })

  if (now - lastShootingStarTime > 3000 && Math.random() < 0.02) {
    shootingStars.push(createShootingStar(width, height))
    lastShootingStarTime = now
  }

  shootingStars = shootingStars.filter(star => {
    if (!star.active) return false

    star.x += Math.cos(star.angle) * star.speed
    star.y += Math.sin(star.angle) * star.speed
    star.opacity -= 0.005

    if (star.opacity <= 0 || star.x < 0 || star.x > width || star.y < 0 || star.y > height) {
      star.active = false
      return false
    }

    const gradient = ctx!.createLinearGradient(
      star.x,
      star.y,
      star.x - Math.cos(star.angle) * star.length,
      star.y - Math.sin(star.angle) * star.length
    )
    gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
    gradient.addColorStop(0.5, `rgba(147, 197, 253, ${star.opacity * 0.6})`)
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

    ctx!.strokeStyle = gradient
    ctx!.lineWidth = 2
    ctx!.beginPath()
    ctx!.moveTo(star.x, star.y)
    ctx!.lineTo(
      star.x - Math.cos(star.angle) * star.length,
      star.y - Math.sin(star.angle) * star.length
    )
    ctx!.stroke()

    const glowGradient = ctx!.createRadialGradient(star.x, star.y, 0, star.x, star.y, 5)
    glowGradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * 0.8})`)
    glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
    ctx!.fillStyle = glowGradient
    ctx!.beginPath()
    ctx!.arc(star.x, star.y, 5, 0, Math.PI * 2)
    ctx!.fill()

    return true
  })

  animationId = requestAnimationFrame(animate)
}

const handleResize = () => {
  if (!canvas.value) return
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
  createStars(canvas.value.width, canvas.value.height)
}

onMounted(() => {
  if (!canvas.value) return

  ctx = canvas.value.getContext('2d', { alpha: false })
  if (!ctx) return

  handleResize()
  window.addEventListener('resize', handleResize)

  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)

  animate()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>
