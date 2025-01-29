//React Assessment3 Dec 4th -2024

//1. create a webpack setup, index html and one css file to show css in next questions

//2. how react renders dom in conservative manner - explain
//# React uses a virtual DOM, and we (developers) work on virtual DOM. React runs on real-DOM through virtual DOM. 
//  React only renders Real Dom when virtual Dom is changed.


//3. create a class component named - Success and show some quotes (messages) on success in it
//4. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
//5. create SuccessStory as another component, pass this as props in SuccessChild from Success component
//6. create UserSignIn component using uncontrolled way, should be class component

//7. explain how virtual dom works 
//# render() creates a virtual dom element, and React compares virtual dom. 
//  If there is anything changed using diffing algorithm, React patches these differences in Real DOM.


//8. pass a random value from SuccessStory component back to Success
//9. Create a class component and show all the life cycle hooks/methods
//10. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.