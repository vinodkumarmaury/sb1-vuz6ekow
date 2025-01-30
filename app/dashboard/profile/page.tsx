"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfilePage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=faces" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-2xl">John Doe</CardTitle>
          <p className="text-muted-foreground">Senior Developer</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="text-muted-foreground">Email:</span>{" "}
                    john.doe@example.com
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Phone:</span>{" "}
                    +1 (555) 123-4567
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Location:</span>{" "}
                    San Francisco, CA
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Professional Details</h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="text-muted-foreground">Department:</span>{" "}
                    Engineering
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Role:</span>{" "}
                    Frontend Developer
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Joined:</span>{" "}
                    January 2022
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Bio</h3>
              <p className="text-sm text-muted-foreground">
                Experienced frontend developer with a passion for creating beautiful and intuitive user interfaces. 
                Specialized in React and Next.js development with a strong focus on accessibility and performance optimization.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}