/**
 * Factory Pattern:
 * It provides a way to delegate the instantiation logic to child classes.
 * 
 * When there is some generic process in class but the required sub-classes is dynamically decided at runtime.
 */
interface Interviewer {
    askQuestion(): void
}

class Developer implements Interviewer {
    public askQuestion(): void {
        console.log("Ask development questions")
    }
}

class Designer implements Interviewer {
    public askQuestion(): void {
        console.log("Ask design questions")
    }
}

abstract class HiringManager {
    protected abstract makeInterviewer(): Interviewer

    public takeInterview(): void {
        const interviewer: Interviewer = this.makeInterviewer()
        interviewer.askQuestion()
    }
}

class DevelopmentManager extends HiringManager {
    protected makeInterviewer(): Interviewer {
        return new Developer()
    }
}

class DesignManager extends HiringManager {
    protected makeInterviewer(): Interviewer {
        return new Designer()
    }
}

const devManager = new DevelopmentManager()
devManager.takeInterview()

const designManager = new DesignManager()
designManager.takeInterview()