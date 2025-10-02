import { useState, useEffect, useCallback } from 'react'
import { Particles } from '@tsparticles/react'
import { loadBasic } from '@tsparticles/basic'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
import { ExternalLink, Shield, Target, Crown, BookOpen, Users, Zap } from 'lucide-react'
import certificationsData from './data/certifications.json'
import './App.css'

function App() {
  const [selectedPath, setSelectedPath] = useState(null)
  const [particlesInit, setParticlesInit] = useState(false)

  // 初始化 tsParticles
  const particlesInitialization = useCallback(async (engine) => {
    await loadBasic(engine)
    setParticlesInit(true)
  }, [])

  // 粒子配置
  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#ff0000", "#00ff00", "#0080ff", "#ff8000"],
      },
      links: {
        color: "#ff0000",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }

  // 矩陣雨效果
  useEffect(() => {
    const createMatrixRain = () => {
      const matrixContainer = document.querySelector('.matrix-rain')
      if (!matrixContainer) return

      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
      
      const createChar = () => {
        const char = document.createElement('div')
        char.className = 'matrix-char'
        char.textContent = chars[Math.floor(Math.random() * chars.length)]
        char.style.left = Math.random() * 100 + '%'
        char.style.animationDelay = Math.random() * 3 + 's'
        char.style.animationDuration = (Math.random() * 3 + 2) + 's'
        matrixContainer.appendChild(char)

        setTimeout(() => {
          if (char.parentNode) {
            char.parentNode.removeChild(char)
          }
        }, 5000)
      }

      const interval = setInterval(createChar, 200)
      return () => clearInterval(interval)
    }

    const cleanup = createMatrixRain()
    return cleanup
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const PathIcon = ({ path }) => {
    switch (path) {
      case 'novice': return <BookOpen className="w-8 h-8" />
      case 'aspiring': return <Target className="w-8 h-8" />
      case 'master': return <Crown className="w-8 h-8" />
      default: return <Shield className="w-8 h-8" />
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 粒子背景 */}
      {particlesInit && (
        <Particles
          id="tsparticles"
          init={particlesInitialization}
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />
      )}

      {/* 矩陣雨背景 */}
      <div className="matrix-rain"></div>

      {/* 主要內容 */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 glow-text float-animation">
              紅隊勇者的
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-accent">
              證照冒險攻略
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto">
              一個為資安挑戰者打造的學習路線圖
              <br />
              從萌新到大佬的完整進化之路
            </p>
            
            {/* 快速入口按鈕 */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {Object.entries(certificationsData.learningPaths).map(([key, path]) => (
                <Button
                  key={key}
                  className={`path-button bg-gradient-to-r ${path.color} text-white`}
                  onClick={() => scrollToSection('learning-paths')}
                >
                  <PathIcon path={key} />
                  <span className="ml-2">{path.title}</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* 學習路徑區塊 */}
        <section id="learning-paths" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
              選擇你的冒險路線
            </h2>
            
            {Object.entries(certificationsData.learningPaths).map(([pathKey, path]) => (
              <div key={pathKey} className="mb-20">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-4">
                    <PathIcon path={pathKey} />
                    {path.title}
                  </h3>
                  <p className="text-xl text-muted-foreground">{path.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {path.certifications.map((cert, index) => (
                    <Dialog key={cert.name}>
                      <DialogTrigger asChild>
                        <Card className="cert-card cursor-pointer h-full">
                          <CardHeader className="text-center">
                            <div className="text-4xl mb-4">{cert.logo}</div>
                            <CardTitle className="text-xl font-bold">{cert.name}</CardTitle>
                            <CardDescription className="text-sm">
                              {cert.provider}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="text-center">
                            <Badge variant="secondary" className="mb-2">
                              {cert.difficulty}
                            </Badge>
                            <p className="text-sm text-muted-foreground">
                              {cert.duration}
                            </p>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-3 text-2xl">
                            <span className="text-3xl">{cert.logo}</span>
                            {cert.name}
                          </DialogTitle>
                          <DialogDescription className="text-lg">
                            {cert.fullName}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">發證機構</h4>
                            <p>{cert.provider}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">證照描述</h4>
                            <p>{cert.description}</p>
                          </div>
                          <div className="flex gap-4">
                            <div>
                              <h4 className="font-semibold mb-1">難度等級</h4>
                              <Badge variant="outline">{cert.difficulty}</Badge>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">建議學習時間</h4>
                              <Badge variant="outline">{cert.duration}</Badge>
                            </div>
                          </div>
                          <Button asChild className="w-full">
                            <a href={cert.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              前往官方網站
                            </a>
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 學習資源區塊 */}
        <section id="learning-resources" className="py-20 px-4 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
              實戰練習場
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              理論學習之外，實際動手練習是成為紅隊高手的必經之路。
              這些平台提供了從基礎到進階的完整實戰環境。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificationsData.learningResources.map((resource, index) => (
                <Card key={resource.name} className="resource-card h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{resource.logo}</span>
                      <div>
                        <CardTitle className="text-lg">{resource.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {resource.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {resource.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary" className="text-xs">
                        {resource.difficulty}
                      </Badge>
                      <Button size="sm" asChild>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          前往學習
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 text-center border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              開始你的紅隊冒險之旅
            </h3>
            <p className="text-muted-foreground mb-6">
              記住，成為紅隊專家不是一蹴而就的過程。
              保持學習的熱忱，持續實踐，你也能成為資安領域的頂尖高手！
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={() => scrollToSection('learning-paths')}>
                <Target className="w-4 h-4 mr-2" />
                重新選擇路線
              </Button>
              <Button onClick={() => scrollToSection('learning-resources')}>
                <Zap className="w-4 h-4 mr-2" />
                開始實戰練習
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
