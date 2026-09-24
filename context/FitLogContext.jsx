"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FitLogContext = createContext();

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Load saved data from localStorage
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");

      if (storedPlan) {
        setPlan(JSON.parse(storedPlan));
      }

      if (storedSaved) {
        setSaved(JSON.parse(storedSaved));
      }
    } catch (error) {
      console.error("Failed to load FitLog data:", error);
    } finally {
      setLoaded(true);
    }
  }, []);

  // Save plan
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    }
  }, [plan, loaded]);

  // Save saved workouts
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }
  }, [saved, loaded]);

  // Add workout to today's plan
  const addToPlan = (workout) => {
    if (plan.length >= 5) {
      return {
        success: false,
        message: "Today's plan is full. Maximum 5 lifts.",
      };
    }

    const alreadyExists = plan.some((item) => item.id === workout.id);

    if (alreadyExists) {
      return {
        success: false,
        message: "Workout is already in today's plan.",
      };
    }

    setPlan((current) => [
      ...current,
      {
        ...workout,
        done: false,
      },
    ]);

    return {
      success: true,
      message: "Added to today's plan.",
    };
  };

  // Save workout
  const saveWorkout = (workout) => {
    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      return {
        success: false,
        message: "Workout is already saved.",
      };
    }

    setSaved((current) => [...current, workout]);

    return {
      success: true,
      message: "Saved for later.",
    };
  };

  // Remove from plan
  const removeFromPlan = (id) => {
    setPlan((current) => current.filter((item) => item.id !== id));
  };

  // Remove from saved
  const removeFromSaved = (id) => {
    setSaved((current) => current.filter((item) => item.id !== id));
  };

  // Mark workout as done
  const markAsDone = (id) => {
    setPlan((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              done: true,
            }
          : item
      )
    );
  };

  const value = {
    plan,
    saved,
    loaded,
    planCount: plan.length,
    savedCount: saved.length,
    addToPlan,
    saveWorkout,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  };

  return (
    <FitLogContext.Provider value={value}>
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
}