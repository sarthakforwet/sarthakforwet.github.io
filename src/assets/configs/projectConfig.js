import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import kafkaMl from "../images/kafkaml.png"
import portfolio from "../images/portfolio.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "Rossman_Store_Sales",
        links: [
            {
                name: "repo",
                url: "https://github.com/sarthakforwet/Rossman_Store_Sales",
                icon: <AiFillGithub/>,
            }
        ],
        image: "https://github.com/sarthakforwet/Rossman_Store_Sales/raw/main/Cloud_Pipeline.png",
        description: "An end-to-end ETL pipeline utilizing Kaggle API and Google Cloud Platform to process 1.3 million records from 1300+ Rossman Stores.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Detect GPT",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: kafkaMl,
        description: "Project for real-time anomaly detection using kafka and python.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Pyworkforce",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/pyworkforce",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/pyworkforce/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/pyworkforce/subscription",
                icon: <AiFillEye/>
            },
            {
                name: "docs",
                url: "https://pyworkforce.readthedocs.io/en/stable/",
                icon: <ImBook/>,
            }
        ],
        image: "https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",
        description: "Standard tools for workforce management, queuing, scheduling, rostering and optimization problems.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Portfolio Web",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/portfolio",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/portfolio/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/portfolio/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: portfolio,
        description: "Source code of my current portfolio web page as data scientist.",
        target: "_blank"
    }
]

export default projectConfig