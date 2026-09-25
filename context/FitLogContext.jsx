"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FitLogContext = createContext(null);

export function FitLogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage
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
      console.error("FitLog localStorage error:", error);
    } finally {
      setLoaded(true);
    }
  }, []);

  // Save plan
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan, loaded]);

  // Save saved workouts
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved, loaded]);

  // Add to today's plan
  const addToPlan = (workout) => {
    if (plan.length >= 5) {
      return {
        success: false,
        message: "Today's plan is full. Maximum 5 lifts.",
      };
    }

    const exists = plan.some((item) => item.id === workout.id);

    if (exists) {
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
    const exists = saved.some((item) => item.id === workout.id);

    if (exists) {
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

  // Remove from today's plan
  const removeFromPlan = (id) => {
    setPlan((current) => current.filter((item) => item.id !== id));
  };

  // Remove saved workout
  const removeFromSaved = (id) => {
    setSaved((current) => current.filter((item) => item.id !== id));
  };

  // Mark as done
  const markAsDone = (id) => {
    setPlan((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              done: !item.done,
            }
          : item
      )
    );
  };

  return (
    <FitLogContext.Provider
      value={{
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
      }}
    >
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