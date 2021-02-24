package com.example.codeclan.advertserivce.helpers

// Had to decommission this - stupid SPRING BOOT/ H2 DB were setting up the
// table with this set as INTEGER!!! That caused a problem when trying to send
// data from the client. I expect same issue will arise for the other enums that
// have been set up. I will need to convert them all to Strings so that I can
// complete the project. Once done, I can come back and have another look at
// using enums...


enum class TransmissionType {

    MANUAL,
    AUTOMATIC

}