import { useState } from "react";
import { Technical, MockDataPlayer } from "../../data/MockData";
import { getRandomInt, getRandomTechnical } from "../../Func/func";
import { generateRandomId, checkPassing } from "../../Func/func";

import "./style.css";
import { Button } from "flowbite-react";
import { LineChart } from "../../component/LineChart/LineChart";
const TeamOne = () => {
  let min = 1;
  let max = 5;
  const [statePlayer1, setStatePlayer1] = useState({
    id: generateRandomId(8),
    name: "",
    JerseyNumber: 0,
    Defend: getRandomInt(min, max),
    Technique: getRandomTechnical(Technical, 5),
    play: true,
    point: 0,
  });
  const [ListPlayer1, setListPlayer1] = useState([]);
  const [stateError, setStateError] = useState({});

  // State lưu trữ chỉ số của dropdown đang mở
  const [DataTech, setDataTech] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (data, index) => {
    setDataTech(data);
    setActiveIndex(activeIndex === index ? null : index);
  };

  //State lưu trữ checkbox đang chọn
  const [selectedIndex, setSelectedIndex] = useState(null); // Trạng thái lưu chỉ số checkbox được chọn
  const [ChosesPlayer, setStateChosePlayer] = useState({});
  const handleCheckboxChange = (item, index) => {
    setStateChosePlayer(item);
    setSelectedIndex(index);
  };

  //Handle
  const onHandleChange = (e) => {
    setStateError({});
    setStatePlayer1({
      ...statePlayer1,
      [e.target.name]: e.target.value,
    });
  };

  const resetDataPlayerOne = () => {
    const T = getRandomTechnical(Technical, 5);
    setStatePlayer1({
      id: generateRandomId(8),
      name: "",
      JerseyNumber: 0,
      Defend: getRandomInt(min, max),
      Technique: T,
      play: true,
      point: 0,
    });
  };
  const AddPlayer = () => {
    if (ListPlayer1.length >= 10) {
      alert("Tối đa chỉ có 10 cầu thủ");
    } else {
      if (validateAddPlayer()) {
        let temp = ListPlayer1;
        temp.push(statePlayer1);
        setListPlayer1(temp);
        resetDataPlayerOne();
      }
    }
  };
  const RemovePlayer = (id) => {
    let filterId = ListPlayer1.filter((item) => item.id !== id);

    setListPlayer1(filterId);
  };
  const validateAddPlayer = () => {
    const newErrors = {};
    if (!statePlayer1.name) {
      newErrors.name = "Vui lòng không bỏ trống thông tin !!";
    }

    const checkJerseyNumberExists = (array, number) => {
      return array.some((obj) => parseInt(obj.JerseyNumber) === number);
    };
    if (
      checkJerseyNumberExists(ListPlayer1, parseInt(statePlayer1.JerseyNumber))
    ) {
      newErrors.JerseyNumber = "Số áo này đã tồn tại  !!";
    }

    setStateError(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  //status play
  const [IsPlaying, setIsPlaying] = useState(false);
  //Lịch sử trận đấu
  const [stateHistory, setStateHistory] = useState([]);
  //danh sách bị phạt
  const [stateDisciplinary, setStateDisciplinary] = useState([]);

  //danh sách các skill được sử dụng
  const [stateTechUseCount, setStateTechUseCount] = useState([]);
  //Start Play
  const HandlePlay = () => {
    if (selectedIndex < 0 || selectedIndex === null) {
      alert("Vui lòng chọn cầu thủ !");
    } else if (ListPlayer1.length < 10) {
      alert("Vui lòng tạo đủ 10 người chơi !");
    } else {
      alert("Chơi");
      setIsPlaying(true);

      let userFail;
      let FormHistory;

      // Hàm lấy ngẫu nhiên một cầu thủ có điều kiện play: true
      const getRandomPlayer = (playersArray) => {
        const availablePlayers = playersArray.filter(
          (player) => player.play === true && player.id !== ChosesPlayer.id
        );

        if (availablePlayers.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * availablePlayers.length
          );
          return availablePlayers[randomIndex];
        }
        return null;
      };
      const CacutePoint = (sttFail, TechPoint) => {
        return 10 - parseInt(sttFail) + parseInt(TechPoint);
      };

      const User_Receive_the_ball = getRandomPlayer(ListPlayer1);

      if (User_Receive_the_ball) {
        const getRandomSkill = getRandomTechnical(ChosesPlayer.Technique, 1);

        const check = checkPassing(
          parseInt(getRandomSkill[0].Difficulty),
          parseInt(User_Receive_the_ball.Defend)
        );
        //pass false

        if (check === 0) {
          const UpdateListplayer = ListPlayer1.map((item) => {
            //User fail
            if (item.id === ChosesPlayer.id) {
              //Chuyển về trạng thái không được chơi nữa
              return { ...item, play: false };
            }
            return item;
          });
          userFail = { ...ChosesPlayer, stt: stateDisciplinary.length + 1 };

          let ListUserDisciplinary = stateDisciplinary;
          ListUserDisciplinary.push(userFail);
          setStateDisciplinary(ListUserDisciplinary);
          setListPlayer1(UpdateListplayer);
        } else {
          //User Pass success

          const UpdateListplayer = ListPlayer1.map((item) => {
            if (item.id === ChosesPlayer.id) {
              return {
                ...item,
                point:
                  item.point +
                  CacutePoint(
                    stateDisciplinary.length,
                    parseInt(getRandomSkill[0].Difficulty)
                  ),
              };
            }
            return item;
          });
          setListPlayer1(UpdateListplayer);
        }

        FormHistory = {
          Player_pass_the_ball: {
            name: ChosesPlayer.name,
            JerseyNumber: ChosesPlayer.JerseyNumber,
            Technical: getRandomSkill[0],
          },
          Player_Receive_the_bal: {
            name: User_Receive_the_ball.name,
            JerseyNumber: User_Receive_the_ball.JerseyNumber,
            Technical: {},
          },
          success: check === 0 ? false : true,
        };

        let ListHistory = stateHistory;
        ListHistory.push(FormHistory);
        setStateHistory(ListHistory);

        const techniqueCount = {};

        // Lặp qua dữ liệu và đếm số lần mỗi id xuất hiện
        ListHistory.forEach((item) => {
          const technical = item.Player_pass_the_ball.Technical;
          if (technical && technical.id) {
            if (!techniqueCount[technical.id]) {
              techniqueCount[technical.id] = {
                Technique: technical.Technique,
                id: technical.id,
                count: 0,
              };
            }
            techniqueCount[technical.id].count += 1;
          }
        });

        // Chuyển object thành mảng
        const result = Object.values(techniqueCount);
        setStateTechUseCount(result);
        setStateChosePlayer(User_Receive_the_ball);
        setSelectedIndex(User_Receive_the_ball.id);
      } else {
        alert("Trò chơi kết thúc");
      }
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <span className={`font-bold text-4xl `}>Nhập đội hình</span>

      <div className={`gap-4  grid grid-cols-2 `}>
        <div className={`col-span-1  `}>
          {" "}
          <div class="w-full h-full bg-white shadow-md rounded px-8 pt-6 pb-8">
            <div class="mb-4">
              <label
                for="name"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={statePlayer1.name}
                onChange={onHandleChange}
                placeholder="Enter name"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {stateError && stateError.name ? (
                <span className="text-sm text-red-600">{stateError.name}</span>
              ) : (
                ""
              )}
            </div>

            <div class="mb-4">
              <label
                for="jersey-number"
                class="block text-gray-700 text-sm font-bold mb-2"
              >
                Jersey Number
              </label>
              <input
                type="number"
                id="jersey-number"
                name="JerseyNumber"
                value={statePlayer1.JerseyNumber}
                onChange={onHandleChange}
                placeholder="Enter jersey number"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {stateError && stateError.JerseyNumber ? (
                <span className="text-sm text-red-600">
                  {stateError.JerseyNumber}
                </span>
              ) : (
                ""
              )}
            </div>

            <div class="flex items-center justify-between">
              {IsPlaying ? (
                <>
                  {" "}
                  <button class="bg-gray-400 cursor-default text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add player
                  </button>
                  <button class="bg-gray-400 cursor-default text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Mock Data Player
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <button
                    onClick={AddPlayer}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Add player
                  </button>
                  <button
                    onClick={() => {
                      setListPlayer1(MockDataPlayer);
                    }}
                    class="bg-emerald-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Mock Data Player
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-1 flex">
          <Button
            onClick={HandlePlay}
            className="m-auto w-24 h-24 text-center text-3xl font-semibold items-center"
          >
            CHƠI
          </Button>
        </div>
      </div>
      <div className="striped-bg grid grid-cols-10 gap-4 p-6 border border-green-800 rounded-lg bg-gray-50 ">
        {ListPlayer1 &&
          ListPlayer1.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`relative  ${
                  item.play ? "" : "pointer-events-none"
                } col-span-2 px-5 py-3 flex shadow-lg flex-col justify-center cursor-pointer items-center gap-3 ${
                  selectedIndex === item.id ? "!bg-blue-500" : "bg-gray-300"
                } bg-purple-300 rounded-lg hover:bg-green-300`}
                onClick={() => handleCheckboxChange(item, item.id)}
              >
                {item.play ? (
                  ""
                ) : (
                  <div className="flex absolute opacity-60   text-white rounded-lg w-full h-full bg-gray-700 z-40 ">
                    <h1 className="m-auto">OUT</h1>
                  </div>
                )}

                <input
                  type="checkbox"
                  checked={selectedIndex === item.id}
                  className="mr-2"
                />

                <span className="text-base font-semibold">{item.name}</span>
                <span className="text-base font-semibold">
                  {item.JerseyNumber}
                </span>
                <span className="flex justify-between items-center  text-sm text-gray-700">
                  <div className="relative">
                    {/* Button */}
                    <div className="relative inline-block text-left">
                      {/* Dropdown Button */}
                      <button
                        key={index}
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => {
                          toggleDropdown(item?.Technique, index);
                        }}
                      >
                        View Skill
                        <svg
                          className="-mr-1 ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.061a.75.75 0 111.14.976l-4 4.375a.75.75 0 01-1.08 0l-4-4.375a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      {activeIndex === index && (
                        <div className="origin-top-right absolute z-[100] right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                          >
                            {DataTech.map((item, index) => {
                              return (
                                <div
                                  className=" flex-col block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                  role="menuitem"
                                >
                                  <span>Kỉ thuật : {item.Technique} </span>
                                  <br></br>
                                  <span>Độ khó : {item.Difficulty} </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </span>
                <div className={`text-sm `}>
                  {IsPlaying ? (
                    <>
                      {" "}
                      <button className="bg-gray-400 cursor-default text-white py-1 px-3 rounded ml-2">
                        Delete
                      </button>
                    </>
                  ) : (
                    <>
                      {" "}
                      <button
                        onClick={() => {
                          RemovePlayer(item.id);
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded ml-2"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
      </div>

      <div className="bg-background-component rounded-lg flex flex-col gap-2 p-4 h-52 overflow-y-auto">
        <span className="text-lg text-gray-200 bg-background-component font-semibold sticky top-0 ">
          Bình luận viên ({stateHistory.length})
        </span>
        {stateHistory.length > 0 &&
          stateHistory
            .slice()
            .reverse()
            .map((item, index) => {
              return (
                <>
                  <div
                    className={`flex w-full h-full  ${
                      item.success ? "bg-green-300" : "bg-red-300"
                    } p-2 rounded-lg`}
                  >
                    <span>
                      - Người chơi <b>{item.Player_pass_the_ball.name}</b> Mang
                      áo số <b> {item.Player_pass_the_ball.JerseyNumber} </b> đã
                      truyền với skill :{" "}
                      <b>{item.Player_pass_the_ball.Technical.Technique}</b> cho{" "}
                      <b>{item.Player_Receive_the_bal.name} </b>kết quả :{" "}
                      <b>{item.success ? "Thành công" : "Bị cản phá"}</b>
                    </span>
                  </div>
                </>
              );
            })}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <span className="col-span-1 h-96">
          {" "}
          <div className="bg-background-component rounded-lg gap-4 p-6  w-full h-full  flex flex-col">
            <span className="text-lg text-gray-200 font-semibold  ">
              Thống kê kỹ thuật
            </span>

            <LineChart data={stateTechUseCount}></LineChart>
          </div>
        </span>
        <span className="col-span-1">
          {" "}
          <div className="bg-background-component rounded-lg flex flex-col gap-2 p-4 h-96 overflow-y-auto">
            <span className="text-lg text-gray-200 font-semibold sticky top-0 ">
              Bảng xếp hạng
            </span>
            {ListPlayer1.length > 0 &&
              ListPlayer1.filter((item) => item.point > 0)
                .sort((a, b) => b.point - a.point)
                .map((item, index) => {
                  return (
                    <>
                      <div
                        className={`flex w-full  text-[#393E40] p-2 rounded-lg ${
                          index === 0
                            ? "text-[#FFD700]"
                            : index === 1
                            ? "text-[#C0C0C0]"
                            : index === 2
                            ? "text-[#CD7F32]"
                            : ""
                        }`}
                      >
                        <span>
                          ({index + 1}) Người chơi có <b>{item.name}</b> có tổng
                          point là : <b>{item.point}</b>{" "}
                          {index === 0
                            ? "GIẢI NHẤT"
                            : index === 1
                            ? "GIẢI NHÌ"
                            : index === 2
                            ? "GIẢI BA"
                            : ""}
                        </span>
                      </div>
                    </>
                  );
                })}
          </div>
        </span>
      </div>
    </div>
  );
};
export default TeamOne;
