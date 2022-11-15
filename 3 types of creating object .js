//1) JavaScript Object by object literal
emp={
    id:102,
    name:"Shyam Kumar",
    salary:40000
}  
console.log(emp.id+ " " +emp.name+" "+emp.salary);

//2) By creating instance of Object
	var emp=new Object();  
	emp.id=101;  
	emp.name="Ravi Malik";  
	emp.salary=50000;  
	console.log(emp.id+" "+emp.name+" "+emp.salary);  

//3) By using an Object constructor
	function emp1(id,name,salary){  
    	this.id=id;  
    	this.name=name;  
    	this.salary=salary;  
    	}  
    	e=new emp1(103,"Vimal Jaiswal",30000);  
    	console.log(e.id+" "+e.name+" "+e.salary);  
    