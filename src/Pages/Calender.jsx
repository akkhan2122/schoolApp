import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Footer from "../Components/Footer";

export default function Calendar() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 1000,
      delay: 200,
      reset: false,
    });

    sr.reveal(".calendar-header", { delay: 200 });
    sr.reveal(".calendar-day", { interval: 100 });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-zinc-100 p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
          <div className="p-4 border-b calendar-header">
            <h2 className="text-2xl font-semibold text-center">CALENDAR</h2>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-7 gap-4 text-center">
              <div className="font-semibold calendar-day">Mon</div>
              <div className="font-semibold calendar-day">Tue</div>
              <div className="font-semibold calendar-day">Wed</div>
              <div className="font-semibold calendar-day">Thu</div>
              <div className="font-semibold calendar-day">Fri</div>
              <div className="font-semibold text-orange-500 calendar-day">Sat</div>
              <div className="font-semibold text-orange-500 calendar-day">Sun</div>
              <div className="calendar-day">1</div>
              <div className="calendar-day">2</div>
              <div className="calendar-day">3</div>
              <div className="calendar-day">4</div>
              <div className="calendar-day">5</div>
              <div className="text-orange-500 calendar-day">6</div>
              <div className="text-orange-500 calendar-day">7</div>
              <div className="calendar-day">8</div>
              <div className="calendar-day">9</div>
              <div className="calendar-day">10</div>
              <div className="calendar-day">11</div>
              <div className="calendar-day">12</div>
              <div className="text-orange-500 calendar-day">13</div>
              <div className="text-orange-500 calendar-day">14</div>
              <div className="calendar-day">15</div>
              <div className="calendar-day">16</div>
              <div className="calendar-day">17</div>
              <div className="calendar-day">18</div>
              <div className="calendar-day">19</div>
              <div className="text-orange-500 calendar-day">20</div>
              <div className="text-orange-500 calendar-day">21</div>
              <div className="calendar-day">22</div>
              <div className="calendar-day">23</div>
              <div className="calendar-day">24</div>
              <div className="calendar-day">25</div>
              <div className="calendar-day">26</div>
              <div className="text-orange-500 calendar-day">27</div>
              <div className="text-orange-500 calendar-day">28</div>
              <div className="calendar-day">29</div>
              <div className="calendar-day">30</div>
              <div className="calendar-day">31</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
