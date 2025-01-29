"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { SubscriptionManager } from "@/components/SubscriptionManager"
import { WebsiteList } from "@/components/WebsiteList"
import { SEOReports } from "@/components/SEOReports"

// Sample data for the chart
const data = [
  { name: "Jan", visits: 4000 },
  { name: "Feb", visits: 3000 },
  { name: "Mar", visits: 5000 },
  { name: "Apr", visits: 4500 },
  { name: "May", visits: 6000 },
  { name: "Jun", visits: 5500 },
]

export function DashboardClient() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="flex space-x-4 mb-6">
        <Button variant={activeTab === "overview" ? "default" : "outline"} onClick={() => setActiveTab("overview")}>
          Overview
        </Button>
        <Button variant={activeTab === "websites" ? "default" : "outline"} onClick={() => setActiveTab("websites")}>
          Websites
        </Button>
        <Button variant={activeTab === "seo" ? "default" : "outline"} onClick={() => setActiveTab("seo")}>
          SEO Reports
        </Button>
        <Button
          variant={activeTab === "subscription" ? "default" : "outline"}
          onClick={() => setActiveTab("subscription")}
        >
          Subscription
        </Button>
      </div>

      {activeTab === "overview" && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Website Visits</CardTitle>
              <CardDescription>Total visits across all your websites</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="visits" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          {/* Add more overview cards here */}
        </div>
      )}

      {activeTab === "websites" && <WebsiteList />}
      {activeTab === "seo" && <SEOReports />}
      {activeTab === "subscription" && <SubscriptionManager />}
    </div>
  )
}

