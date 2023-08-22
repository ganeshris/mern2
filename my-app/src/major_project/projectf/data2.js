import { UilUsdSquare, UilMoneyWithdrawal,UilClipboardAlt } from "@iconscout/react-unicons";
// here i deefine data to use for indevidul card to reduce complexcity 
export let CardsData = [
    {
      title: "Sales",
      color: {
        backGround: "#8080808c",
        boxShadow: "#8080808c 0px 5px 10px 0px",
      },
      barValue: 70,
      value: "25,970",
      png: UilUsdSquare,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Revenue",
      color: {
        backGround: "#8080808c",
        boxShadow: "#8080808c 0px 5px 10px 0px",
      },
      barValue: 80,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Expenses",
      color: {
        backGround: "#8080808c",
        boxShadow: "#8080808c 0px 5px 10px 0px",
      },
      barValue: 60,
      value: "4,270",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];