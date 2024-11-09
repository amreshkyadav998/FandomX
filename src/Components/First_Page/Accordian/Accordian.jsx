

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// import MuiAccordion from '@mui/material/Accordion';
// import MuiAccordionSummary from '@mui/material/AccordionSummary';
// import MuiAccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';

// const Accordion = styled((props) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   background:'#111111',
//   border: 'none',
//   color:'#fff',
//   overflow: 'hidden',
//   '&:not(:last-child)': {
//     borderBottom: '1px solid black',
//   },
// }));

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '2rem', transition: '0.5s ease-in-out' }} />}
//     {...props}
//   />
// ))(({ theme, active }) => ({
//   width: '100%',
//   textAlign: 'left',
//   padding: '20px 10px',
//   margin:'0px 100px',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   fontWeight: 600,
//   fontSize: '32px',
//   color:'#fff',
//   background: '#111111',
//   border: '20px',
//   cursor: 'pointer',
//   color: active ? '#1db954' : 'inherit',
//   backgroundImage: active ? 'linear-gradient(90deg,transparent,rgba(0,0,0,0.04),transparent)' : 'none',
//   '&:hover': {
//     backgroundImage: 'linear-gradient(90deg,transparent,rgba(0,0,0,0.04),transparent)',
//   },
//   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//     transform: 'rotate(180deg)',
//     color: active ? '#1db954' : 'inherit',
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: '0 1rem',
//   transition: 'height 0.7s ease-in-out',
// }));

// export default function CustomizedAccordions() {
//   const [expanded, setExpanded] = React.useState('panel1');

//   const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };

//   return (
//     <div className="container">
//       <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//         <AccordionSummary active={expanded === 'panel1'} aria-controls="panel1d-content" id="panel1d-header">
//           <Typography>Collapsible Group Item #1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography className="answer-content">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
//         <AccordionSummary active={expanded === 'panel2'} aria-controls="panel2d-content" id="panel2d-header">
//           <Typography>Collapsible Group Item #2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography className="answer-content">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
//         <AccordionSummary active={expanded === 'panel3'} aria-controls="panel3d-content" id="panel3d-header">
//           <Typography>Collapsible Group Item #3</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography className="answer-content">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }


// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"

// export function AccordionDemo() {
//   return (
//     <Accordion type="single" collapsible className="w-full">
//       <AccordionItem value="item-1">
//         <AccordionTrigger>Is it accessible?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger>Is it styled?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It comes with default styles that matches the other
//           components&apos; aesthetic.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-3">
//         <AccordionTrigger>Is it animated?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It&apos;s animated by default, but you can disable it if you
//           prefer.
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   )
// }

import React, { useState } from 'react';
import './Accordian.css'
import { FaPlus ,FaMinus } from "react-icons/fa";

const Accordian = ({item}) => {
  const [showDetails,setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  }
  return (
    <div className='accordian-container'>
      <div className="main-menu">
        <p>{item.question}</p>
        <div className={`accordian-btn ${showDetails && "rotate"}`} onClick={toggleDetails}>
        {showDetails ? <FaMinus/>:<FaPlus/>}
        </div>
      </div>
      {showDetails && <div className='collapsable-menu'>
        {item.answer}
      </div>}
    </div>
  )
}

export default Accordian;

