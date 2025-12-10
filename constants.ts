import { Zap, Globe, MessageCircle, Layers, Smartphone, Sparkles, UserPlus, Heart } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'Dataset', id: 'dataset' },
  { name: 'MotionNFT', id: 'motionnft' },
  { name: 'Comparisons', id: 'comparisons' },
];

export const HERO_GRID_ITEMS = [
  {
    id: 1,
    image: "./motionedit_images/results_suppl/400/optical_flow4_0.2cos+0.7l1_0.5mllm_v3_step210_100.jpg",
    hoverImage: "./motionedit_images/results_suppl/400/pre.jpg", 
    prompt: "Replace the milk jar's drawn smile with an open mouth shape, holding a piece of the chocolate chip cookie taken from the cookie on the right. The right chocolate chip cookie should visibly have a bite missing.",
    span: "col-span-1 md:col-span-3",
    overlayText: ""
  },
  {
    id: 2,
    image: "./motionedit_images/results_suppl/428/optical_flow4_0.2cos+0.7l1_0.5mllm_v3_step210_100.jpg",
    hoverImage: "./motionedit_images/results_suppl/428/pre.jpg", 
    prompt: "Show the man actively manipulating the puppet, with one hand touching its leg, giving the puppet slightly bent knees, and the man a focused expression.",
    span: "col-span-1 md:col-span-2",
    overlayText: ""
  },
  {
    id: 3,
    image: "./motionedit_images/results_suppl/601/optical_flow4_0.2cos+0.7l1_0.5mllm_v3_step210_100.jpg",
    hoverImage: "./motionedit_images/results_suppl/601/pre.jpg", 
    prompt: "Move the watermelon from on the woman's head to in front of her lower body.",
    span: "col-span-1 md:col-span-3",
    overlayText: ""
  },
  {
    id: 4,
    image: "./motionedit_images/results_open/27/optical_flow4_0.2cos+0.7l1_0.5mllm_v3_step210_100.jpg",
    hoverImage: "./motionedit_images/results_open/27/pre.jpg",
    prompt: "Adjust the lion's head pose and facial expression to be calm, looking slightly downwards.",
    span: "col-span-1 md:col-span-4",
    overlayText: ""
  },
  {
    id: 5,
    image: "./motionedit_images/results_open/80/optical_flow4_0.2cos+0.7l1_0.5mllm_v3_step210_100.jpg",
    hoverImage: "./motionedit_images/results_open/80/pre.jpg",
    prompt: "Make the woman sip from her coffee cup, looking down.",
    span: "col-span-1 md:col-span-4",
    overlayText: ""
  },
  // {
  //   id: 6,
  //   image: "./motionedit_images/results_suppl/369/optical_flow4_0.2cos+0.7l1_0.5mllm_v3_step210_100.jpg",
  //   hoverImage: "./motionedit_images/results_suppl/369/pre.jpg", 
  //   prompt: "Change the person's pose: lift the torso to an upright position, extend the right arm straight out to the side, and extend the left arm forward. Keep the current outfit and facial expression.",
  //   span: "col-span-1 md:col-span-2",
  //   overlayText: ""
  // },
  {
    id: 7,
    image: "./motionedit_images/results_suppl/403/optical_flow4_0.2cos+0.7l1_0.5mllm_v3_step210_100.jpg",
    hoverImage: "./motionedit_images/results_suppl/403/pre.jpg", 
    prompt: "Replace the man's clasped hands with his right hand gently touching the woman's left hand, comforting her.",
    span: "col-span-1 md:col-span-3",
    overlayText: ""
  },
  {
    id: 8,
    image: "./motionedit_images/results_open/170/optical_flow4_0.2cos+0.7l1_0.5mllm_v3_step210_100.jpg",
    hoverImage: "./motionedit_images/results_open/170/pre.jpg", 
    prompt: "Make the robot raise its left arm to wave.",
    span: "col-span-1 md:col-span-3",
    overlayText: ""
  },
  {
    id: 3,
    image: "./motionedit_images/results_suppl/354/optical_flow4_0.2cos+0.7l1_0.5mllm_v3_step210_100.jpg",
    hoverImage: "./motionedit_images/results_suppl/354/pre.jpg", 
    prompt: "Move the white mug from the woman's hands to the wooden table, positioned to her right.",
    span: "col-span-1 md:col-span-2",
    overlayText: ""
  },
];

export interface DemoItem {
  id: string;
  beforeImage: string;
  beforePrompt: string;
  afterImage: string;
  finalImage: string;
}

export const DEMOS: DemoItem[] = [
  {
    id: '569',
    beforeImage: "./motionedit_images/results_suppl/569/pre.jpg",
    beforePrompt: "Change the girl's right arm pose from an extended gesture to a hand-on-hip pose, keeping her winking expression, blue hair, and outfit unchanged.",
    afterImage: "./motionedit_images/results_suppl/569/optical_flow4_0.2cos+0.7l1_0.5mllm_v3_step210_100.jpg",
    finalImage: "./motionedit_images/results_suppl/569/gt.jpg"
  },
  {
    id: '27',
    beforeImage: "./motionedit_images/results_open/27/pre.jpg",
    beforePrompt: "Adjust the lion's head pose and facial expression to be calm, looking slightly downwards.",
    afterImage: "./motionedit_images/results_open/27/optical_flow4_0.2cos+0.7l1_0.5mllm_v3_step210_100.jpg",
    finalImage: "./motionedit_images/results_open/27/gt.jpg"
  },
  {
    id: '428',
    beforeImage: "./motionedit_images/results_suppl/428/pre.jpg",
    beforePrompt: "Show the man actively manipulating the puppet, with one hand touching its leg, giving the puppet slightly bent knees, and the man a focused expression.",
    afterImage: "./motionedit_images/results_suppl/428/optical_flow4_0.2cos+0.7l1_0.5mllm_v3_step210_100.jpg",
    finalImage: "./motionedit_images/results_suppl/428/gt.jpg"
  },
  {
    id: '28',
    beforeImage: "./motionedit_images/results_open/28/pre.jpg",
    beforePrompt: "Change the gorilla's pose to an aggressive gesture, raising its left arm and forming a fist.",
    afterImage: "./motionedit_images/results_open/28/optical_flow4_0.2cos+0.7l1_0.5mllm_v3_step210_100.jpg",
    finalImage: "./motionedit_images/results_open/28/gt.jpg"
  },
  {
    id: '50',
    beforeImage: "./motionedit_images/results_open/50/pre.jpg",
    beforePrompt: "Change the device from a glowing blue state to a non-glowing, muted light blue/grey state, and turn off the blue indicator lights on the button.",
    afterImage: "./motionedit_images/results_open/50/optical_flow4_0.2cos+0.7l1_0.5mllm_v3_step210_100.jpg",
    finalImage: "./motionedit_images/results_open/50/gt.jpg"
  },
  {
    id: '75',
    beforeImage: "./motionedit_images/results_open/75/pre.jpg",
    beforePrompt: "Enhance mushroom luminescence, adding vibrant blue and purple glow to lower caps; increase density and vibrancy of surrounding magical particles with varied colors.",
    afterImage: "./motionedit_images/results_open/75/optical_flow4_0.2cos+0.7l1_0.5mllm_v3_step210_100.jpg",
    finalImage: "./motionedit_images/results_open/75/gt.jpg"
  },
  {
    id: '107',
    beforeImage: "./motionedit_images/results_open/107/pre.jpg",
    beforePrompt: "The man is drinking from the brown jug.",
    afterImage: "./motionedit_images/results_open/107/optical_flow4_0.2cos+0.7l1_0.5mllm_v3_step210_100.jpg",
    finalImage: "./motionedit_images/results_open/107/gt.jpg"
  },
];


export const FOOTER_LINKS = [
  {
    title: "Product",
    links: ["Overview", "Pricing", "API", "Customers"]
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Press"]
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "Security"]
  }
];