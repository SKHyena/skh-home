"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 여기에 폼 제출 로직 추가
    console.log("Form submitted:", formData)
    alert("문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">문의하기</h3>
            <p className="text-gray-600 mb-6">
              프로젝트 상담이나 문의사항이 있으시면 아래 양식을 통해 연락주세요. 빠른 시일 내에 답변 드리겠습니다.
            </p>
            <div className="flex items-center mb-4">
              <Mail className="mr-3 text-blue-600" />
              <span>contact@skh.com</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="mr-3 text-blue-600" />
              <span>카카오톡: @skhteam</span>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input name="name" placeholder="이름" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="이메일"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="문의 내용"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                문의하기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
