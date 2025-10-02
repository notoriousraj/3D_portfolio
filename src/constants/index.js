import { meta, shopify, starbucks, tesla, whitetusker, synapse, dsi, mercedes } from "../assets/images";
import {
    contact,
    git,
    github,
    html,
    css,
    linkedin,
    threads,
    vr,
    unity,
    game,
    ps,
    blender,
    javascript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game Engine",
    },
    {
        imageUrl: blender,
        name: "Blender",
        type: "3D Modeling Software",
    },
    ,
    {
        imageUrl: ps,
        name: "Photoshop",
        type: "Photo editor",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "Java Script",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Unity Developer",
        company_name: "Dreamsoft Innovations",
        icon: dsi,
        iconBg: "#accbe1",
        date: "April 2022 - August 2024",
        points: [
            "Developed and maintained AR and VR applications using Unity and related technologies.",
            "Collaborated with cross - functional teams, including designers, product managers, and developers, to deliver engaging and immersive experiences.",
            "Utilized Unity's rendering pipelines (HDRP, LWRP) and Shader Graphs to create optimized visuals and effects tailored for different platforms.",
            "Integrated multiplayer systems in Unity to support interactive and collaborative experiences.",
            "Leveraged ARFoundation, Vuforia, ARCore, and ARKit to build cross- platform AR solutions.",
            "Implemented responsive UI and ensured cross - platform compatibility for mobile and VR devices.",
            "Participated in code reviews, providing constructive feedback and helping maintain code quality and performance standards across projects.",
        ],
    },
    {
        title: "Unity Developer",
        company_name: "SynapseIndia",
        icon: synapse,
        iconBg: "#accbe1",
        date: "August 2024 - Current",
        points: [
            "Developed and maintained AR and VR applications using Unity and related technologies.",
            "Collaborated with cross - functional teams, including designers, product managers, and developers, to deliver engaging and immersive experiences.",
            "Utilized Unity's rendering pipelines (HDRP, LWRP) and Shader Graphs to create optimized visuals and effects tailored for different platforms.",
            "Integrated multiplayer systems in Unity to support interactive and collaborative experiences.",
            "Leveraged ARFoundation, Vuforia, ARCore, and ARKit to build cross- platform AR solutions.",
            "Implemented responsive UI and ensured cross - platform compatibility for mobile and VR devices.",
            "Participated in code reviews, providing constructive feedback and helping maintain code quality and performance standards across projects.",
        ],
    },
    {
        title: "Unity Developer",
        company_name: "White Tusker",
        icon: whitetusker,
        iconBg: "#accbe1",
        date: "April 2025 - August 2025",
        points: [
            "Developed AR content and applications for Xreal glasses, enhancing immersive experiences tailored for wearable AR devices.",
            "Worked on integrating Unity WebRTC to build a real-time streaming platform, enabling seamless content sharing across multiple AR glasses.",
            "Collaborated with designers and developers to create optimized XR experiences for both standalone and streaming-based workflows.",
            "Leveraged Unity’s ARFoundation and third-party SDKs to ensure high performance on AR wearables.",
            "Implemented cross-platform compatibility and responsive UI for smooth interaction in AR environments.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Mercedes Benz Research and Development India",
        icon: mercedes,
        iconBg: "#accbe1",
        date: "August 2025 - Current",
        points: [
            "Exploring and learning NVIDIA Omniverse to develop collaborative 3D simulation and digital twin solutions.",
            "Working with Python for automation, data processing, and integration with Omniverse workflows.",
            "Collaborating with cross-functional engineering teams to support AR/VR and simulation-based projects.",
            "Researching and prototyping advanced visualization pipelines for enterprise-level automotive applications.",
            "Contributing to innovative solutions at the intersection of real-time 3D graphics, simulation, and software development.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/notoriousraj',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/suman-raj-shetty-84070b178/',
    }
];

export const projects = [
    {
        iconUrl: game,
        theme: 'btn-back-yellow',
        name: 'Xreal Chess',
        description: 'Xreal Chess is an augmented reality chess game built for Xreal glasses. The game allows players to experience classic chess in AR, featuring an interactive board and pieces rendered directly into their real-world environment. A lightweight AI opponent was implemented to provide a basic but engaging solo play experience, making it both a tech demo and a fun casual AR game.',
        link: 'https://github.com/notoriousraj/XRealChess',
    },
    {
        iconUrl: game,
        theme: 'btn-back-blue',
        name: 'JumpTag',
        description: 'JumpTag is a fun prototype game where a bot runs and jumps across platforms while the player must chase and catch it. The gameplay challenge is based on how many times you can successfully catch the bot within a limited time, testing your reaction speed and timing.',
        link: 'https://github.com/notoriousraj/JumpTag.git',
    },
    {
        iconUrl: game,
        theme: 'btn-back-blue',
        name: 'Online Gun Game',
        description: 'Gun Game is a straightforward online multiplayer shooter developed with Photon Fusion. Players can join or create a room by entering a room name and their username. The game offers fast-paced combat with real-time synchronization for player movement, shooting, and hit detection. Players can respawn after being eliminated, ensuring continuous action. The gameplay is simple yet engaging, supporting free-for-all or team-based modes, with score tracking to add a competitive edge.',
        link: 'https://github.com/notoriousraj/Gun-Game-Online',
    },
    {
        iconUrl: game,
        theme: 'btn-back-green',
        name: 'Monopoly Online',
        description: 'Welcome to the Multiplayer Monopoly Game, a classic board game brought to life in Unity with Netcode for multiplayer functionality! This game allows players to compete with each other in real-time, buying properties, collecting rent, and aiming to bankrupt their opponents. You can also play against bots for a solo experience or to practice your strategies.',
        link: 'https://github.com/notoriousraj/Monopoly',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-yellow',
        name: 'ObjectPlace AR',
        description: 'ObjectPlace AR is an innovative augmented reality application that allows users to select and scan their environment to seamlessly place 3D objects in real time. Sourced from a dynamic online library, users can easily add or remove objects without altering any code, providing a flexible and constantly updated experience. Whether for design, education, or entertainment, ObjectPlace AR empowers users to visualize and interact with digital content in their physical space like never before.',
        link: 'https://youtu.be/uL5I-6yjmu4',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-red',
        name: 'PoseAR',
        description: 'PoseAR leverages Google’s BlazePose model to enable real-time, full-body tracking in augmented reality. This AR experience overlays a digital skeleton on the user’s body, capturing movements with high precision and low latency. PoseAR provides immersive applications for fitness, virtual try-ons, dance training, and interactive gaming by accurately mapping body movements to AR objects or avatars. With seamless integration into mobile devices, it aims to make AR body tracking accessible and responsive for a wide range of interactive applications.',
        link: 'https://github.com/notoriousraj/dev.dsi.blazepose',
    },
    {
        iconUrl: vr,
        theme: 'btn-back-red',
        name: 'VRXplore Spaces',
        description: 'Architour VR" is a collaborative virtual reality platform designed for exploring architectural spaces in immersive detail. Hosted from a mobile or VR device, this experience allows multiple VR users to join and navigate together through 3D architectural environments. Ideal for designers, architects, or enthusiasts, this tool fosters shared virtual exploration and visualization of architectural layouts, bringing blueprints to life and enhancing remote collaboration in real-time.',
        link: 'https://youtu.be/BmAqyxWQL9M',
    },
    {
        iconUrl: game,
        theme: 'btn-back-green',
        name: 'Drone Sim',
        description: '"Drone Sim" is an immersive defense simulation game where players must safeguard a base under attack by hostile enemy drones. As the commander of interceptor drones, players strategize to intercept, engage, and eliminate threats before they breach the base’s defenses. Featuring dynamic drone AI, tactical interception mechanics, and escalating waves of enemies, Drone Sim challenges players to think critically and respond swiftly, making it an ideal game for fans of high-stakes, real-time defense scenarios.',
        link: 'https://youtu.be/rQ6SJDfvHQI',
    },
];