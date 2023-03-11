// import React from 'react';

// class Feedback extends React.Component {
//   //виніс в апп
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   // ------------

//   //виніс в апп
//   handleBtnGood = e => {
//     // console.dir(e.target.textContent);
//     this.setState(prevState => ({ good: prevState.good + 1 }));
//   };

//   handleBtnNeutral = e => {
//     // console.dir(e.target.textContent);
//     this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
//   };

//   handleBtnBad = e => {
//     // console.dir(e.target);
//     this.setState(prevState => {
//       return { bad: prevState.bad + 1 };
//     });
//   };
//   //----------------

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     let total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;

//     const total = this.countTotalFeedback();
//     if (!total) {
//       const percent = 0;
//       return percent;
//     }
//     return Math.round((good / total) * 100);
//   };

//   render() {
//     return (
//       <>
//         <h1>Please leave feedback</h1>
//         <div>
//           <button onClick={this.handleBtnGood}>Good</button>
//           <button onClick={this.handleBtnNeutral}>Neutral</button>
//           <button onClick={this.handleBtnBad}>Bad</button>
//         </div>
//         <h2>Statistic</h2>
//         <ul>
//           <li>Good: {this.state.good}</li>
//           <li>Neutral: {this.state.neutral}</li>
//           <li>Bad: {this.state.bad}</li>
//           <li>Total: {this.countTotalFeedback()}</li>
//           <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
//         </ul>
//       </>
//     );
//   }
// }

// export default Feedback;
