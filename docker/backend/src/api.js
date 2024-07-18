console.log("hello world");

/* Authentication */

/* API */
    // Get
        // Stretch Routine
        // User info (history, preferences, etc...)
    // Set
        // Stretch Routine Generation Parameters
            // (Body Part, Goal, # of stretches, ) 
        // Individual Stretch Preference (like / dislike / neutral)

/* Database */
    // Body Part:
        // number of stretches (could by dynamically retrieved from list)
        // indexed list of stretches 
        // adjacent body parts
    // Stretch
        // duration
        // instruction text
        // graphic(s)
        // video(s)?

/* Stretch Routine Composition Algorithm */
    // Don't add "disliked" stretches
    // Bias towards adding "liked" stretches
    // Compose list of targeted stretches
    // Compose a few "peripheral" stretches
        // (stretch nearby areas)


// if we go object oriented:
    // User:
        // data
            // auth data
            // structure for history of stretches
            // structure for stretch bias
        // functions
            // adjust stretch bias()
                // disliked - decrease bias or drop completely
                // recommended recently - decrease bias
                // liked - increase bias
                // positive post-stretch feeback - increase bias for all in routine
            // adjust recommended body part bias()
                // stretched recently - decrease bias
                // stretched often - increase bias 
                    // (ex. "We noticed you often stretch your shoulder for 'rehabilitation',
                    //       would you like to start there today? ")
            // boilerplate getters & setters
    // Body Part:
        // data
            // list of adjacent body parts
        // functions
            // generate stretch routine(# of stretches, target body part, goal)
            // helper- get stretches by body part(body part, number of stretches to return)
            // helper- get stretches by aplicable goal(goal, number of stretches to return)
    // Stretch:
        // data
            // body part
            // applicable goals (i.e. good for warmup || recovery || rehab)
                // use bit-flagging
            // duration
            // instructions
            // graphic(s)
            // video(s)?
        // functions
            