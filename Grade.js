function Grade(score) {
  let res;
  if (score < 0 || score > 10) return "I";
  if (score >= 9) res = "A";
  else if (score >= 8) res = "B";
  else if (score >= 6.5) res = "C";
  else if (score >= 5) res = "D";
  else res = "F";
  return res;
}
//    Dựng đồ thị dòng điều khiển ứng với độ đo C1 và C2
//    Sinh các đường đi và ca kiểm thử với C1
//    Sinh các đường đi và ca kiểm thử với C2
