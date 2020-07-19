export const listButtons = [
  [
    { name: "AC", color: "grey", type: "clear", value: "AC" },
    { name: "+/-", color: "grey", type: "posneg", value: "+/-" },
    { name: "%", color: "grey", type: "operator", value: "%" },
    { name: "z", type: "operator", value: "/" },
  ],
  [
    { name: "mc", type: "memory", value: "mc" },
    { name: "mr", type: "memory", value: "mr" },
    { name: "m-", type: "memory", value: "m-" },
    { name: "m+", color: "orange", type: "memory", value: "m+" },
  ],
  [
    { name: "7", type: "number", value: "7" },
    { name: "8", type: "number", value: "8" },
    { name: "9", type: "number", value: "9" },
    { name: "x", color: "orange", type: "operator", value: "*" },
  ],
  [
    { name: "4", type: "number", value: "4" },
    { name: "5", type: "number", value: "5" },
    { name: "6", type: "number", value: "6" },
    { name: "-", color: "orange", type: "operator", value: "-" },
  ],
  [
    { name: "1", type: "number", value: "1" },
    { name: "2", type: "number", value: "2" },
    { name: "3", type: "number", value: "3" },
    { name: "+", color: "orange", type: "operator", value: "+" },
  ],
  [
    { name: "0", type: "number", size: "", value: "0" },
    { name: ",", type: "number", value: "," },
    { name: "del", type: "del", value: "del" },
    { name: "=", color: "orange", type: "equal", value: "=" },
  ]
];
