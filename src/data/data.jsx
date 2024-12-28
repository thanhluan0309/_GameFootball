import {
  ICON_AGE,
  ICON_HEIGHT,
  ICON_JERSEY_NUMBER,
  ICON_FOOT,
  ICON_POSITION,
  ICON_SPAIN,
} from "../assets/Icon/Icon";
import LOGO from "../assets/img/mu.png";
import {
  IMG_GERMANY,
  IMG_FRANCE,
  IMG_ANH,
  IMG_SPAIN,
  IMG_GREECE,
  IMG_ITALY,
  IMG_POLAND,
  IMG_NORWAY,
} from "../assets/img/Img";
import {
  IMG_LAS_PALMAS,
  IMG_GIRONA,
  IMG_REAL_SOCIEDAD,
  IMG_REAL_BETIS,
  IMG_CADIZ_CF,
  IMG_ALAVES,
  IMG_MAN_CITY,
  IMG_CELTIC_FC,
  IMG_MILAN,
  IMG_BARCELONA,
  IMG_CHELSEA,
  IMG_CAGLIARI,
  IMG_COMO,
  IMG_UDINESE,
  IMG_BOLOGNA,
  IMG_ATALANTA,
  IMG_VERONA,
  IMG_NAPOLI,
  IMG_PARMA,
  IMG_TORINO,
} from "../assets/img/Img";

export const MapViewInfor = () => {
  return [
    {
      title: "Nationality",
      ICON: ICON_SPAIN,
      content: "SPAIN",
      id: "nationality",
      img: "",
    },
    {
      title: "Date of birth",
      ICON: ICON_AGE,
      content: "24 OCT 1996",
      subcontent: "27 years old",
      id: "dateOfBirthTimestamp",
    },
    {
      title: "Height",
      ICON: ICON_HEIGHT,
      content: "189 cm",
      id: "height",
    },
    {
      title: "Preferred foot",
      ICON: ICON_FOOT,
      content: "Unknown",
      id: "preferredFoot",
    },
    {
      title: "Jersey number",
      ICON: ICON_JERSEY_NUMBER,
      content: "19",
      id: "Jersey",
    },
    {
      title: "Postion",
      ICON: ICON_POSITION,
      content: "FW",
      id: "position",
    },
  ];
};

export const MapViewTranfer = () => {
  return [
    {
      Logo: LOGO,
      content: "Chelsea",
      subcontent: "30 Jun 2020",
    },
    {
      Logo: LOGO,
      content: "Chelsea",
      subcontent: "30 Jun 2020",
    },
    {
      Logo: LOGO,
      content: "Chelsea",
      subcontent: "30 Jun 2020",
    },
    {
      Logo: LOGO,
      content: "Chelsea",
      subcontent: "30 Jun 2020",
    },
    {
      Logo: LOGO,
      content: "Chelsea",
      subcontent: "30 Jun 2020",
    },
  ];
};
const EnumRs = {
  win: 0,
  lose: -1,
  draw: 1,
};
export const MapViewMatches = () => {
  return [
    //1
    {
      details: {
        date: "15/07",
        status: "FT",
      },
      TeamOne: {
        Flag_Team: IMG_SPAIN,
        name: "Spain",
        point: 2,
        rs: EnumRs.lose,
      },
      TeamTwo: {
        Flag_Team: IMG_ANH,
        name: "England",
        point: 3,
        rs: EnumRs.win,
      },
      rs: {
        point: 0,
      },
    },
    //2
    {
      details: {
        date: "10/07",
        status: "FT",
      },
      TeamOne: {
        Flag_Team: IMG_SPAIN,
        name: "Spain",
        point: 3,
        rs: EnumRs.win,
      },
      TeamTwo: {
        Flag_Team: IMG_FRANCE,
        name: "France",
        point: 1,
        rs: EnumRs.lose,
      },
      rs: {
        point: 8.2,
      },
    },
    //3
    {
      details: {
        date: "05/07",
        status: "AET",
      },
      TeamOne: {
        Flag_Team: IMG_SPAIN,
        name: "Spain",
        point: 3,
        rs: EnumRs.win,
      },
      TeamTwo: {
        Flag_Team: IMG_GERMANY,
        name: "Germany",
        point: 1,
        rs: EnumRs.lose,
      },
      rs: {
        point: 6.1,
      },
    },
    //4
    {
      details: {
        date: "15/06",
        status: "AET",
      },
      TeamOne: {
        Flag_Team: IMG_SPAIN,
        name: "Spain",
        point: 1,
        rs: EnumRs.draw,
      },
      TeamTwo: {
        Flag_Team: IMG_GERMANY,
        name: "Germany",
        point: 1,
        rs: EnumRs.draw,
      },
      rs: {
        point: 0,
      },
    },
    //5
    {
      details: {
        date: "12/06",
        status: "AET",
      },
      TeamOne: {
        Flag_Team: IMG_SPAIN,
        name: "Spain",
        point: 4,
        rs: EnumRs.win,
      },
      TeamTwo: {
        Flag_Team: IMG_GREECE,
        name: "Greece",
        point: 1,
        rs: EnumRs.lose,
      },
      rs: {
        point: 0,
      },
    },
    //6
    {
      details: {
        date: "05/06",
        status: "AET",
      },
      TeamOne: {
        Flag_Team: IMG_SPAIN,
        name: "Spain",
        point: 4,
        rs: EnumRs.win,
      },
      TeamTwo: {
        Flag_Team: IMG_NORWAY,
        name: "Norway",
        point: 1,
        rs: EnumRs.lose,
      },
      rs: {
        point: 6.1,
      },
    },
    //7
    {
      details: {
        date: "05/06",
        status: "AET",
      },
      TeamOne: {
        Flag_Team: IMG_SPAIN,
        name: "Spain",
        point: 2,
        rs: EnumRs.lose,
      },
      TeamTwo: {
        Flag_Team: IMG_ITALY,
        name: "Italy",
        point: 3,
        rs: EnumRs.win,
      },
      rs: {
        point: 6.1,
      },
    },
    //8
    {
      details: {
        date: "03/05",
        status: "AET",
      },
      TeamOne: {
        Flag_Team: IMG_SPAIN,
        name: "Spain",
        point: 2,
        rs: EnumRs.win,
      },
      TeamTwo: {
        Flag_Team: IMG_ITALY,
        name: "Italy",
        point: 1,
        rs: EnumRs.lose,
      },
      rs: {
        point: 6.1,
      },
    },
  ];
};
export const DataLogo = [
  { name: "Las Palmas", img: IMG_LAS_PALMAS },
  { name: "Girona", img: IMG_GIRONA },
  { name: "Real Sociedad", img: IMG_REAL_SOCIEDAD },
  { name: "Real Betis", img: IMG_REAL_BETIS },
  { name: "Cadiz CF", img: IMG_CADIZ_CF },
  { name: "Alavés", img: IMG_ALAVES },
  { name: "Man City", img: IMG_MAN_CITY },
  { name: "Celtic F.C.", img: IMG_CELTIC_FC },
  { name: "Milan", img: IMG_MILAN },
  { name: "Barcelona", img: IMG_BARCELONA },
  { name: "Chelsea", img: IMG_CHELSEA },
  { name: "Cagliari", img: IMG_CAGLIARI },
  { name: "Como", img: IMG_COMO },
  { name: "Udinese", img: IMG_UDINESE },
  { name: "Bologna", img: IMG_BOLOGNA },
  { name: "Atalanta", img: IMG_ATALANTA },
  { name: "Verona", img: IMG_VERONA },
  { name: "Napoli", img: IMG_NAPOLI },
  { name: "Parma", img: IMG_PARMA },
  { name: "Torino", img: IMG_TORINO },
];
