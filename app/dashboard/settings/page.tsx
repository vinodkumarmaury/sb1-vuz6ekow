"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Bell, Mail, Moon, Sun, Globe } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const { toast } = useToast()
  
  const [settings, setSettings] = useState({
    pushNotifications: true,
    emailNotifications: true,
    language: "English (US)"
  })

  const handleSave = () => {
    // Save settings to localStorage
    localStorage.setItem("userSettings", JSON.stringify(settings))
    
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications about important updates
                  </p>
                </div>
              </div>
              <Switch 
                checked={settings.pushNotifications}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({ ...prev, pushNotifications: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Get email updates about your account
                  </p>
                </div>
              </div>
              <Switch 
                checked={settings.emailNotifications}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({ ...prev, emailNotifications: checked }))
                }
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Sun className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Light Mode</p>
                  <p className="text-sm text-muted-foreground">
                    Use light theme for the interface
                  </p>
                </div>
              </div>
              <Switch 
                checked={theme === "light"}
                onCheckedChange={() => setTheme("light")}
              />
            </div>

            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Moon className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">
                    Use dark theme for the interface
                  </p>
                </div>
              </div>
              <Switch 
                checked={theme === "dark"}
                onCheckedChange={() => setTheme("dark")}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Language & Region</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Language</p>
                  <p className="text-sm text-muted-foreground">
                    Select your preferred language
                  </p>
                </div>
              </div>
              <select 
                className="rounded-md border p-2"
                value={settings.language}
                onChange={(e) => 
                  setSettings(prev => ({ ...prev, language: e.target.value }))
                }
              >
                <option>English (US)</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end space-x-4">
          <Button 
            variant="outline" 
            onClick={() => window.location.reload()}
          >
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </div>
      <Toaster />
    </div>
  )
}