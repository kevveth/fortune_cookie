//Credit fortunes to "https://www.geckoandfly.com/16647/20-wise-chinese-fortune-cookie-sayings/"

//Generate a random number between 1 and 100
const randomNumber = () => {
    return Math.floor(Math.random() * 100) + 1
}

const generateDate = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let date = new Date().getDay() - 1

    return days[date]
}

const generateLuck = (_num = randomNumber()) => {
    const typesOfLuck = ['Good', 'Bad', 'Unknown']
    let luck

    if (_num < 9 || _num > 92) {
        luck = typesOfLuck[2]
    } else if (_num < 26 || _num > 75) {
        luck = typesOfLuck[1]
    } else {
        luck = typesOfLuck[0]
    }

    return luck
}

const generateMessage = (day) => {
    const messages = {
        Monday: ['The early bird gets the worm, but the second mouse gets the cheese.',
            'Be on the alert to recognize your prime at whatever time of your life it may occur.',
            'Your road to glory will be rocky, but fulfilling.',
            'Courage is not simply one of the virtues, but the form of every virtue at the testing point.'],

        Tuesday: ['Patience is your alley at the moment. Don’t worry!',
            'Nothing is impossible to a willing heart.',
            'Don’t worry about money. The best things in life are free.',
            'Don’t pursue happiness – create it.'],

        Wednesday: ['Courage is not the absence of fear; it is the conquest of it.',
            'Nothing is so much to be feared as fear.',
            'All things are difficult before they are easy.',
            'The real kindness comes from within you.'],

        Thursday: ['A ship in harbor is safe, but that’s not why ships are built.',
            'You don’t need strength to let go of something. What you really need is understanding.',
            'If you want the rainbow, you have to tolerate the rain.',
            'Fear is interest paid on a debt you may not owe.'],

        Friday: ['Hardly anyone knows how much is gained by ignoring the future.',
            'The wise man is the one that makes you think that he is dumb.',
            'The usefulness of a cup is in its emptiness.',
            'He who throws mud loses ground.'],

        Saturday: ['Success lies in the hands of those who wants it.',
            'To avoid criticism, do nothing, say nothing, be nothing.',
            'One that would have the fruit must climb the tree.',
            'It takes less time to do a thing right than it does to explain why you did it wrong.'],

        Sunday: ['Big journeys begin with a single step.',
            'Of all our human resources, the most precious is the desire to improve.',
            'Do the thing you fear and the death of fear is certain.',
            'You never show your vulnerability, you are always self assured and confident.'],
    }
    let message = messages[day][Math.floor(Math.random() * 4)]

    return message
}


const fortune = (day, luck, message) => {
    return {
        _day: day,
        _luck: luck,
        _message: message,

        get day() {
            return this._day
        },

        get luck() {
            return this._luck
        },

        get message() {
            return this._message
        }
    }
}

let date = generateDate()
const fortuneCookie = fortune(date, generateLuck(), generateMessage(date))

console.log(generateDate())

console.log(fortuneCookie.message)



