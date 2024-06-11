import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import { BiTrophy as TrophyIcon } from "react-icons/bi";
import { BiClipboard as BoardIcon } from "react-icons/bi";
import { BiCheckSquare as CheckIcon } from "react-icons/bi";
// import { GiTargetDummy as TargetIcon } from "react-icons/gi";
import { GiTargetArrows as TargetIcon } from "react-icons/gi";
import { FaHtml5 as HtmlIcon } from "react-icons/fa";
import { BsGraphUp as GraphIcon } from "react-icons/bs";
import Modal from "../modal";
// import React, { useRef } from 'react';
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillTestContent = () => {
  const [rank, setRank] = useState("4");
  const [percentile, setPercentile] = useState("90");
  const [score, setScore] = useState("10");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: ["0", "25", "50", "75", "100"],
      title: {
        text: "",
      },
      plotLines: [
        {
          color: "gray", // Red color for the plot line
          width: 1,
          value: (percentile as unknown as number) / 25,
          label: {
            text: "your percentile",
            style: {
              color: "gray",
            },
          },
          zIndex: 5,
        },
      ],
    },
    yAxis: {
      visible: false,
    },
    series: [
      {
        showInLegend: false,
        type: "spline",
        name: "Number of Students",
        data: [
          { x: 0, y: 5 },
          { x: 1, y: 10 },
          { x: 2, y: 50 },
          { x: 3, y: 30 },
          { x: 4, y: 4 },
        ],
        marker: {
          enabled: true,
          radius: 5,
        },
        dataLabels: {
          enabled: true,
          formatter: function () {
            return this.y;
          },
        },
      },
    ],
  };

  const updateInfo = ({
    rank,
    percentile,
    score,
  }: {
    rank: string;
    percentile: string;
    score: string;
  }) => {
    console.log(rank, percentile, score);
    setRank(rank);
    setPercentile(percentile);
    setScore(score);
    setIsModalOpen(false);
  };
  return (
    <div className="w-full flex md:flex-row flex-col">
      <div className="md:w-[60%] w-full lg:pl-12 md:pl-8 pl-3 lg:pr-3 pr-3">
        <div className="text-slate-500 md:py-6 py-4">Skill Test</div>
        <div className="flex md:flex-row flex-col justify-between border-[1px] rounded-lg lg:py-6 md:py-4 py-3 lg:px-4 md:px-2 px-2">
          <div className="flex flex-row">
            <HtmlIcon className=" hidden md:block h-12 w-12 text-orange-500 mr-2 my-auto" />
            <div className="flex flex-col">
              <div className="lg:text-base md:text-sm text-base font-bold flex flex-row">
                <HtmlIcon className="md:h-12 h-8 md:w-12 w-8 text-orange-500 mr-2 my-auto md:hidden" />
                HyperText Markup Language
              </div>
              <div className="lg:text-sm md:text-xs text-xs mt-2">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </div>
            </div>
          </div>
          <button
            className="lg:p-2 md:p-1 lg:px-5 md:px-3 lg:h-[50px] md:h-[35px] h-[40px] bg-blue-900 text-white rounded-lg my-auto md:mt-auto mt-2"
            onClick={() => setIsModalOpen(true)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-col justify-between border-[1px] rounded-lg lg:py-4 py-3 lg:px-4 md:px-2 px-2 lg:mt-6 mt-4">
          <div className="lg:text-base md:text-sm text-base font-bold">
            Quick Statistics
          </div>
          <div className="flex flex-row">
            <div className="md:w-[33%] w-full">
              <div className="flex flex-col md:justify-center items-center lg:p-4 p-2">
                <TrophyIcon className="h-10 w-10 text-yellow-500 my-auto" />
                <div className="flex flex-col items-center">
                  <div className="font-bold">{rank}</div>
                  <div className="text-slate-400 lg:text-sm md:text-xs text-sm text-center">
                    YOUR RANK
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[33%] w-full">
              <div className="flex flex-col md:justify-center items-center lg:p-4 p-2 border-x-[1px]">
                <BoardIcon className="h-10 w-10 text-slate-500 my-auto" />
                <div className="flex flex-col items-center">
                  <div className="font-bold">{percentile}%</div>
                  <div className="text-slate-400 lg:text-sm md:text-xs text-sm">
                    PERCENTILE
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[33%] w-full">
              <div className="flex flex-col md:justify-center items-center lg:p-4 p-2">
                <CheckIcon className="h-10 w-10 text-green-500 my-auto" />
                <div className="flex flex-col items-center">
                  <div className="font-bold">{score}/15</div>
                  <div className="text-slate-400 lg:text-sm md:text-xs text-sm text-center">
                    CORRECT ANSWERS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between border-[1px] rounded-lg lg:py-4 py-3 lg:px-4 md:px-2 px-2 lg:mt-6 mt-4 mb-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <div className="lg:text-base md:text-sm text-base font-bold">
                Comparison Graph
              </div>
              <div className="lg:text-base md:text-sm text-base mt-4">
                You scored better than {percentile}% of students. Keep it up!
              </div>
            </div>
            <div className="w-14 h-14 flex justify-center items-center">
              <GraphIcon className="h-8 w-8 text-blue-500 my-auto" />
            </div>
          </div>

          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            ref={chartComponentRef}
          />
        </div>
      </div>
      <div className="md:w-[40%] w-full">
        <div className="flex flex-col justify-between border-[1px] rounded-lg lg:py-4 py-3 lg:px-4 md:px-2 px-2 md:mt-[72px] mt-4 mb-4 mx-3 ">
          <div className="lg:text-base md:text-sm text-base font-bold mb-6">
            Syllabus Wise Analysis
          </div>

          <div className="lg:text-base md:text-sm text-base text-slate-700">
            HTML Tools, Forms, History
          </div>
          <div className="flex flex-row pt-3 pb-6">
            <div className="w-full bg-blue-100 h-3 rounded-full my-auto mr-2">
              <div className="w-[80%] bg-blue-400 h-3 rounded-full"></div>
            </div>
            <div className="text-blue-500 font-bold">80%</div>
          </div>

          <div className="lg:text-base md:text-sm text-base text-slate-700">
            Tags & References in HTML
          </div>
          <div className="flex flex-row pt-3 pb-6">
            <div className="w-full bg-orange-100 h-3 rounded-full my-auto mr-2">
              <div className="w-[60%] bg-orange-400 h-3 rounded-full"></div>
            </div>
            <div className="text-orange-500 font-bold">60%</div>
          </div>

          <div className="lg:text-base md:text-sm text-base text-slate-700">
            Tables & References in HTML
          </div>
          <div className="flex flex-row pt-3 pb-6">
            <div className="w-full bg-red-100 h-3 rounded-full my-auto mr-2">
              <div className="w-[24%] bg-red-400 h-3 rounded-full"></div>
            </div>
            <div className="text-red-500 font-bold">24%</div>
          </div>

          <div className="lg:text-base md:text-sm text-base text-slate-700">
            Tables & References in HTML
          </div>
          <div className="flex flex-row pt-3 pb-6">
            <div className="w-full bg-green-100 h-3 rounded-full my-auto mr-2">
              <div className="w-[96%] bg-green-400 h-3 rounded-full"></div>
            </div>
            <div className="text-green-500 font-bold">96%</div>
          </div>
        </div>
        <div className="flex flex-col justify-between border-[1px] rounded-lg lg:py-4 py-3 lg:px-4 md:px-2 px-2 md:mt-6 mt-4 mb-4 mx-3 ">
          <div className="lg:text-base md:text-sm text-base font-bold flex flex-row justify-between">
            <div>Question Analysis</div>
            <div className="text-blue-500">{score}/15</div>
          </div>
          <div className="mt-3 mb-6">You have scored {score} out of 15!</div>
          <div className="h-[150px] w-[150px] mx-auto">
            <CircularProgressbarWithChildren
              value={(score as unknown as number)*100/15}
              strokeWidth={15}
              styles={buildStyles({
                pathColor: "#2564eb",
                trailColor: "#eee",
                strokeLinecap: "butt",
              })}
            >
              <TargetIcon className="h-12 w-12 text-blue-500" />
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal update={updateInfo} close={setIsModalOpen} />}
    </div>
  );
};

export default SkillTestContent;
