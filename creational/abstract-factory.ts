/**
 * Abstract Factory Pattern:
 * A factory of factories; a factory that groups the individual but related/dependent factories together without specifying their concrete classes.
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

interface Recruiter {
    scoutTalent(): void
}

class DeveloperTA implements Recruiter {
    public scoutTalent(): void {
        console.log("Scout development talents")
    }
}

class DesignerTA implements Recruiter {
    public scoutTalent(): void {
        console.log("Scout design talents")
    }
}

interface HiringManager {
    getTA(): Recruiter
    getInterviewer(): Interviewer
}

// Factory
class DevelopmentManager implements HiringManager {
    public getTA(): Recruiter {
        return new DeveloperTA()
    }

    public getInterviewer(): Interviewer {
        return new Developer()
    }
}

// Factory
class DesignManager implements HiringManager {
    public getTA(): Recruiter {
        return new DesignerTA()
    }

    public getInterviewer(): Interviewer {
        return new Designer()
    }
}

const devManager = new DevelopmentManager()
const devTA = devManager.getTA()
const devInterviewer = devManager.getInterviewer()
devTA.scoutTalent()
devInterviewer.askQuestion()

const designManager = new DesignManager()
const designTA = designManager.getTA()
const designInterviewer = designManager.getInterviewer()
designTA.scoutTalent()
designInterviewer.askQuestion()