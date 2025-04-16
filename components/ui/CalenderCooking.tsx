"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ChefHat, Bell, X, Plus } from "lucide-react"

type CookingReminder = {
  date: Date
  recipe: string
  mealType: "breakfast" | "lunch" | "dinner" | "snack" | "dessert"
}

interface CookingCalendarProps {
  recipeName?: any
}

export default function CookingCalendar({ recipeName = "Current Recipe" }: CookingCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [showAddReminder, setShowAddReminder] = useState(false)
  const [newReminder, setNewReminder] = useState<{
    mealType: "breakfast" | "lunch" | "dinner" | "snack" | "dessert"
  }>({
    mealType: "dinner",
  })

  // Sample cooking reminders - in a real app, these would come from a database
  const [cookingReminders, setCookingReminders] = useState<CookingReminder[]>([
    { date: new Date(2025, 3, 18), recipe: "Homemade Pizza", mealType: "dinner" },
    { date: new Date(2025, 3, 20), recipe: "Chocolate Chip Cookies", mealType: "dessert" },
    { date: new Date(2025, 3, 25), recipe: "Breakfast Burrito", mealType: "breakfast" },
  ])

  // Get current month and year
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  // Get days in month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  // Get first day of month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  // Month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  // Day names
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  }

  // Navigate to next month
  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
  }

  // Check if a date has cooking reminders
  const hasReminders = (date: Date) => {
    return cookingReminders.some(
      (reminder) =>
        reminder.date.getDate() === date.getDate() &&
        reminder.date.getMonth() === date.getMonth() &&
        reminder.date.getFullYear() === date.getFullYear(),
    )
  }

  // Get reminders for a date
  const getRemindersForDate = (date: Date) => {
    return cookingReminders.filter(
      (reminder) =>
        reminder.date.getDate() === date.getDate() &&
        reminder.date.getMonth() === date.getMonth() &&
        reminder.date.getFullYear() === date.getFullYear(),
    )
  }

  // Check if a date is today
  const isToday = (date: Date) => {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  // Check if a date is selected
  const isSelected = (date: Date) => {
    return (
      selectedDate &&
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    )
  }

  // Add a new cooking reminder
  const addReminder = () => {
    if (selectedDate) {
      const reminder: CookingReminder = {
        date: selectedDate,
        recipe: recipeName,
        mealType: newReminder.mealType,
      }
      setCookingReminders([...cookingReminders, reminder])
      setNewReminder({ mealType: "dinner" })
      setShowAddReminder(false)
    }
  }

  // Delete a reminder
  const deleteReminder = (index: number) => {
    const updatedReminders = [...cookingReminders]
    updatedReminders.splice(index, 1)
    setCookingReminders(updatedReminders)
  }

  // Get meal type color
  const getMealTypeColor = (mealType: string) => {
    switch (mealType) {
      case "breakfast":
        return "bg-[#FFDE59]"
      case "lunch":
        return "bg-[#4ECDC4]"
      case "dinner":
        return "bg-[#FF6B6B]"
      case "snack":
        return "bg-[#FF9F1C]"
      case "dessert":
        return "bg-[#B388EB]"
      default:
        return "bg-gray-200"
    }
  }

  // Generate calendar days
  const calendarDays = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-12 border-[3px] border-black bg-gray-100"></div>)
  }

  // Add cells for days in the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day)
    const dayHasReminders = hasReminders(date)
    const dayIsToday = isToday(date)
    const dayIsSelected = isSelected(date)

    calendarDays.push(
      <div
        key={`day-${day}`}
        onClick={() => setSelectedDate(date)}
        className={`
          relative h-12 border-[3px] border-black p-1 font-bold transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer
          ${dayIsToday ? "bg-[#FF6B6B] text-white" : "bg-white"}
          ${dayIsSelected ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]" : ""}
          ${dayHasReminders ? "font-black" : ""}
        `}
      >
        <span className="text-lg">{day}</span>
        {dayHasReminders && (
          <div className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-black bg-[#FF9F1C]">
            <ChefHat size={12} className="text-black" />
          </div>
        )}
      </div>,
    )
  }

  return (
    <div className="w-full max-w-md rounded-xl ">
      <div className="border-[6px] border-black rounded-xl bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Calendar header */}
        <div className="flex items-center justify-between border-b-[6px] border-black bg-[#FF6B6B] p-4">
          <button
            onClick={prevMonth}
            className="rotate-[-3deg] border-[3px] border-black bg-white p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center">
            <ChefHat size={24} className="mr-2" />
            <h2 className="rotate-[1deg] text-2xl font-black uppercase text-white">
              {monthNames[currentMonth]} {currentYear}
            </h2>
          </div>

          <button
            onClick={nextMonth}
            className="rotate-[3deg] border-[3px] border-black bg-white p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 border-b-[6px] border-black bg-[#FFDE59]">
          {dayNames.map((day, index) => (
            <div key={day} className={`p-2 text-center font-black ${index === 0 || index === 6 ? "bg-[#FF9F1C]" : ""}`}>
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7">{calendarDays}</div>

        {/* Selected date info */}
        {selectedDate && (
          <div className="border-t-[6px] border-black bg-white p-4">
            <div className="rotate-[1deg] border-[3px] border-black bg-[#4ECDC4] p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-white">
                  {selectedDate.getDate()} {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
                </h3>

                {!showAddReminder && (
                  <button
                    onClick={() => setShowAddReminder(true)}
                    className="flex items-center rounded-full border-2 border-black bg-white p-1 font-bold"
                  >
                    <Plus size={16} />
                  </button>
                )}
              </div>

              {getRemindersForDate(selectedDate).length > 0 ? (
                <div className="mt-3">
                  <h4 className="font-bold uppercase text-white">Cooking Reminders:</h4>
                  <ul className="mt-2 space-y-2">
                    {getRemindersForDate(selectedDate).map((reminder, index) => (
                      <li
                        key={index}
                        className={`flex items-center justify-between rounded border-2 border-black p-2 ${getMealTypeColor(
                          reminder.mealType,
                        )}`}
                      >
                        <div className="flex items-center">
                          <Bell className="mr-2 h-4 w-4" />
                          <span className="font-bold">{reminder.recipe}</span>
                          <span className="ml-2 rounded-full border border-black px-2 py-0.5 text-xs font-bold uppercase">
                            {reminder.mealType}
                          </span>
                        </div>
                        <button
                          onClick={() => deleteReminder(index)}
                          className="rounded-full border border-black bg-white p-1"
                        >
                          <X size={12} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="mt-3 flex items-center rounded border-2 border-black bg-[#FFDE59] p-2">
                  <Bell className="mr-2 h-5 w-5" />
                  <p className="font-bold">No cooking plans for this day!</p>
                </div>
              )}

              {showAddReminder && (
                <div className="mt-3 rounded border-2 border-black bg-white p-3">
                  <h4 className="font-bold uppercase">Remind Me to Cook:</h4>
                  <div className="mt-2 space-y-2">
                    <div className="rounded border-2 border-black bg-[#FFDE59] p-2">
                      <div className="flex items-center">
                        <ChefHat className="mr-2 h-5 w-5" />
                        <p className="font-bold">{recipeName}</p>
                      </div>
                    </div>
                    <select
                      value={newReminder.mealType}
                      onChange={(e) =>
                        setNewReminder({
                          ...newReminder,
                          mealType: e.target.value as "breakfast" | "lunch" | "dinner" | "snack" | "dessert",
                        })
                      }
                      className="w-full border-2 border-black p-2 font-bold"
                    >
                      <option value="breakfast">Breakfast</option>
                      <option value="lunch">Lunch</option>
                      <option value="dinner">Dinner</option>
                      <option value="snack">Snack</option>
                      <option value="dessert">Dessert</option>
                    </select>
                    <div className="flex space-x-2">
                      <button
                        onClick={addReminder}
                        className="flex-1 border-2 border-black bg-[#FF6B6B] p-2 font-bold text-white hover:bg-[#ff5252]"
                      >
                        Set Reminder
                      </button>
                      <button
                        onClick={() => setShowAddReminder(false)}
                        className="border-2 border-black bg-gray-200 p-2 font-bold hover:bg-gray-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Cooking reminder alert banner */}
        <div className="border-t-[6px] border-black bg-[#FF9F1C] p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bell className="mr-2 h-6 w-6 animate-bounce" />
              <h3 className="font-black uppercase">REMIND ME TO COOK!</h3>
            </div>
            <button
              onClick={() => {
                if (selectedDate) {
                  setShowAddReminder(true)
                } else {
                  setSelectedDate(new Date())
                  setTimeout(() => setShowAddReminder(true), 100)
                }
              }}
              className="rotate-[2deg] border-[3px] border-black bg-white p-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              ADD REMINDER
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
