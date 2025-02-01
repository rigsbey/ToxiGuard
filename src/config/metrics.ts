export const METRICS = {
  TOTAL_SPOTS: 300,
  CURRENT_SIGNUPS: 142,
  PROTECTED_AMOUNT: 42_500,
  AVG_HOURS_SAVED: 24,
  PROJECTS_ANALYZED: 89,
  RISK_ACCURACY: 0.88,
  DISPUTE_IMPROVEMENT: 0.83,
  
  get filledSpots() {
    return Math.min(this.TOTAL_SPOTS, this.CURRENT_SIGNUPS);
  },
  get remainingSpots() {
    return this.TOTAL_SPOTS - this.filledSpots;
  },
  get progressPercentage() {
    return (this.filledSpots / this.TOTAL_SPOTS) * 100;
  }
}; 