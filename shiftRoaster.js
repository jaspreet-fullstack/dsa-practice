
const employees = [
    { id: 1, code: "EMP001", name: "Aman", profession: "Check-in", skills: ["Check-in"], leave: [] },
    { id: 2, code: "EMP002", name: "Simran", profession: "Check-in", skills: ["Check-in"], leave: ["Monday"] },
    { id: 3, code: "EMP003", name: "Rahul", profession: "Check-in", skills: ["Check-in"], leave: [] },
    { id: 4, code: "EMP004", name: "Jas", profession: "Check-in", skills: ["Check-in"], leave: [] },
    { id: 5, code: "EMP005", name: "Kavita", profession: "Check-in", skills: ["Check-in"], leave: [] },
  
    { id: 6, code: "EMP006", name: "Karan", profession: "Baggage", skills: ["Baggage"], leave: [] },
    { id: 7, code: "EMP007", name: "Neha", profession: "Baggage", skills: ["Baggage"], leave: ["Wednesday"] },
    { id: 8, code: "EMP008", name: "Arjun", profession: "Baggage", skills: ["Baggage"], leave: [] },
    { id: 9, code: "EMP009", name: "Meena", profession: "Baggage", skills: ["Baggage"], leave: [] },
    { id: 10, code: "EMP010", name: "Deepak", profession: "Baggage", skills: ["Baggage"], leave: [] },
  
    { id: 11, code: "EMP011", name: "Priya", profession: "Boarding", skills: ["Boarding"], leave: [] },
    { id: 12, code: "EMP012", name: "Gagan", profession: "Boarding", skills: ["Boarding"], leave: [] },
    { id: 13, code: "EMP013", name: "Ravi", profession: "Boarding", skills: ["Boarding"], leave: [] },
    { id: 14, code: "EMP014", name: "Mandeep", profession: "Boarding", skills: ["Boarding"], leave: [] },
    { id: 15, code: "EMP015", name: "Pooja", profession: "Boarding", skills: ["Boarding"], leave: [] }
  ];
  
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  
  // The airline continues operating on public holidays.
  const holidays = ["Wednesday"];
  
  const shifts = [
    { name: "Morning", start: 6, end: 14 },
    { name: "Evening", start: 14, end: 22 },
    { name: "Night", start: 22, end: 30 }
  ];
  
  const requiredRoles = [
    "Check-in",
    "Baggage",
    "Boarding"
  ];
  
  const MAX_SHIFTS_PER_WEEK = 5;
  
  const MIN_REST_HOURS = 11;
  
  const workload = {};
  const nightWorkload = {};
  const weekendWorkload = {};
  const holidayWorkload = {};
  const lastShiftEnd = {};
  
  for (const employee of employees) {
    workload[employee.id] = 0;
    nightWorkload[employee.id] = 0;
    weekendWorkload[employee.id] = 0;
    holidayWorkload[employee.id] = 0;
    lastShiftEnd[employee.id] = null;
  }
  
  const roster = [];
  const shortages = [];
  
  function isWeekend(day) {
    return day === "Saturday" || day === "Sunday";
  }
  
  function generateRoster() {
    for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
      const day = days[dayIndex];
      const assignedToday = new Set();
  
      for (const shift of shifts) {
        const shiftStart = dayIndex * 24 + shift.start;
        const shiftEnd = dayIndex * 24 + shift.end;
        const isHoliday = holidays.includes(day);
  
        for (const role of requiredRoles) {
            
         // Find employees who satisfy all hard rules.
          const eligibleEmployees = employees.filter(employee => {
            const previousEnd = lastShiftEnd[employee.id];
  
            const hasEnoughRest =
              previousEnd === null ||
              shiftStart - previousEnd >= MIN_REST_HOURS;
  
            return (
              employee.skills.includes(role) &&
              !employee.leave.includes(day) &&
              !assignedToday.has(employee.id) &&
              workload[employee.id] < MAX_SHIFTS_PER_WEEK &&
              hasEnoughRest
            );
          });
  
          // Prefer employees with lower workload.
          eligibleEmployees.sort((a, b) =>
            workload[a.id] - workload[b.id] ||
            nightWorkload[a.id] - nightWorkload[b.id] ||
            weekendWorkload[a.id] - weekendWorkload[b.id] ||
            holidayWorkload[a.id] - holidayWorkload[b.id] ||
            a.id - b.id
          );
  
          const employee = eligibleEmployees[0];
  
          // Report the shortage if nobody is eligible.
          if (!employee) {
            shortages.push({
              day,
              shift: shift.name,
              role,
              reason: "No eligible employee available"
            });
  
            continue;
          }
  
          // Add the assignment to the roster.
          roster.push({
            day,
            shift: shift.name,
            role,
            employeeCode: employee.code,
            employeeName: employee.name,
            isWeekend: isWeekend(day),
            isHoliday
          });
  
          // Update tracking information.
          assignedToday.add(employee.id);
          workload[employee.id]++;
          lastShiftEnd[employee.id] = shiftEnd;
  
          if (shift.name === "Night") {
            nightWorkload[employee.id]++;
          }
  
          if (isWeekend(day)) {
            weekendWorkload[employee.id]++;
          }
  
          if (isHoliday) {
            holidayWorkload[employee.id]++;
          }
        }
      }
    }
  
    return roster;
  }
  
  const weeklyRoster = generateRoster();
  
  console.log("WEEKLY EMPLOYEE ROSTER");
  console.table(weeklyRoster);
  
  console.log("EMPLOYEE WORKLOAD SUMMARY");
  
  console.table(
    employees.map(employee => ({
      employeeCode: employee.code,
      employeeName: employee.name,
      profession: employee.profession,
      totalShifts: workload[employee.id],
      nightShifts: nightWorkload[employee.id],
      weekendShifts: weekendWorkload[employee.id],
      holidayShifts: holidayWorkload[employee.id],
      shiftsRemaining: MAX_SHIFTS_PER_WEEK - workload[employee.id]
    }))
  );
  
  console.log("STAFFING SHORTAGES");
  console.table(shortages);
  
  console.log("Total required assignments:", days.length * shifts.length * requiredRoles.length);
  console.log("Assignments generated:", weeklyRoster.length);
  console.log("Unfilled requirements:", shortages.length);
  