/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class Student {
    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    constructor() { }
    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    static getInstance() {
        if (!Student.instance) {
            Student.instance = new Student();
        }
        return Student.instance;
    }
    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    someBusinessLogic() {
        console.log("Guardando en la BD el estudiante");
    }
}
/**
* The client code.
*/
function clientCode() {
    const s1 = Student.getInstance();
    const s2 = Student.getInstance();
    s1.someBusinessLogic();
    s2.someBusinessLogic();
    if (s1 === s2) {
        console.log('Singleton works, both variables with Student instance, contain the same instance.');
    }
    else {
        console.log('Singleton failed, variables contain different instances.');
    }
}
clientCode();
//# sourceMappingURL=app.js.map