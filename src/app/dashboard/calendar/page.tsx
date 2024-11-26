"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function CalendarPage() {
  const [dateOne, setDateOne] = useState<Date | undefined>(new Date());
  const [dateTwo, setDateTwo] = useState<Date | undefined>(new Date());
  const [dateThree, setDateThree] = useState<Date[] | undefined>([]);
  const [dateFour, setDateFour] = useState<Date | undefined>(new Date());

  const smallDate = dateTwo?.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="flex gap-4 justify-center items-center max-sm:flex-col flex-wrap ">
      <Calendar mode="single" selected={dateOne} onSelect={setDateOne} />
      <Calendar mode="single" selected={dateTwo} onSelect={setDateTwo} />
      <Calendar mode="multiple" selected={dateThree} onSelect={setDateThree} />
      <Calendar
        mode="single"
        selected={dateFour}
        onSelect={setDateFour}
        disabled={(dateFour) =>
          dateFour?.getDay() === 0 || dateFour?.getDay() === 6
        }
      />

      <div className="w-full flex flex-col  gap-5">
        <div className="flex gap-5 border-b border-red-700 pb-5">
          <h2 className="text-xl font-bold ">info: </h2>
          <h3>Year</h3>
          <p>{dateOne?.getFullYear()}</p>
          <h3>Month</h3>
          <p>
            {dateOne?.getMonth()} ,{" "}
            {dateOne?.toLocaleString("default", { month: "long" })}
          </p>
          <h3>Day</h3>
          <p>{dateOne?.getDate()}</p>
        </div>
        <div className="flex gap-5 border-b border-red-700 pb-5">
          <h3>{smallDate}</h3>
        </div>

        <div className="flex gap-5 border-b border-red-700 pb-5">
          <p>Multiple</p>
          <p>
            {" "}
            {dateThree
              ?.map((date) => date.toLocaleDateString())
              .join(", ")}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
