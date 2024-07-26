import React from 'react'

const LikeDislikeButton = () => {
    // code to switch image here

    const styles = {
        button: {
            // width: "50px",
            // height: "50px",
        },
        icon: {},
        circle: {}
    }

  return (
    <button style={styles.button}>
        <img style={styles.icon}/>  {/* icon */}
        <img style={styles.circle}/>  {/* encapsulating circle */}
    </button>
  )
}

export default LikeDislikeButton