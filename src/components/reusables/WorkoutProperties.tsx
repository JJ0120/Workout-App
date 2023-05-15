


//Var instances for a loaded workout
var name: string
var jsonArray: any
var counter: number = 0

export function updateName(name: string){

}

//Set array which contains json objects
export function setExerciseArray(dataParam: any){
    jsonArray = dataParam
    
  }

  function getName(){
    if(name == null){
      return("No Workout in Progress, select or create one in the My Workouts page")
    } else{
      name = jsonArray[counter].name 
      return(name)
    }
  } 

  function getExerciseName(){
    if(counter == 0){
      name = jsonArray[counter].name 
      counter++;
    } else if(counter ==1){
      name = jsonArray[counter].name
      counter++;
    }
  }

  

export function WorkoutProperties(){

}