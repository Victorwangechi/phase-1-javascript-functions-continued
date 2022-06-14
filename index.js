// code your solution here

function saturdayFun(activity="roller-skate") {
    //function created
    return `This Saturday, I want to ${activity}!`
  }
  
  const mondayWork = function
  (activity="go to the office") {

    return `This Monday, I will ${activity}.`
  }
  //defined mondayWork functione xpression

  const wrapAdjective = function(style="*") {
    return function(adjective="special") {

//function that wraps an adjective.

      return `You are ${style}${adjective}${style}!`
    }
  }