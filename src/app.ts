/**
 * The Student class defines the `getInstance` method that lets clients access
 * the unique student instance.
 */
class Student {
  private static instance: Student;

  /**
   * The Student's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() { }

  /**
   * The static method that controls the access to the student instance.
   *
   * This implementation let you subclass the Student class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): Student {
    if (!Student.instance) {
        Student.instance = new Student();
    }

    return Student.instance;
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public savingInDatabase() {
    console.log("Saving student in database");
  }
  public setAssignatures() {
    console.log("Setting Assignatures")
  }
}

/**
* The client code.
*/
function clientCode() {
  const s1 = Student.getInstance();
  const s2 = Student.getInstance();
  s1.savingInDatabase();
  s2.savingInDatabase();

  if (s1 === s2) {
      console.log('Singleton works, both variables with Student instance, contain the same instance.');
  } else {
      console.log('Singleton failed, variables contain different instances.');
  }
}

clientCode();