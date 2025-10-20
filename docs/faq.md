# Frequently Asked Questions

## Can I create a measure that will change the HVAC system type?

Yes, you can change the HVAC system type using the custom "HVAC System Type" parameter in a user-defined measure.

## How can I model an un-conditioned space?

Currently there is no built-in way to model an unconditioned space, however this is a feature on our current wish-list. As a work-around we suggest this approach:

 - Design Tab
   - Building Type = Parking Garage
   - Air-Side System = Heating Only (Natural Gas)
 - Schedule Tab
   - Weekday Use Simple Thermostats = Yes
   - Weekend Use Simple Thermostats = Yes (this one can be easy to miss!)
   - Heating Setpoint Occupied = 0 F
   - Heating Setpoint Unoccupied = 0 F
 - Baseline Tab
   - Fan Power = 0 W/CFM

## How can I create a model in a city or country that isn't listed on the Project tab?

## Hello

This functionality is not currently available. However if there is a location you'd like to see support, please let us know by contacting [tools@slipstreaminc.org](mailto:tools@slipstreaminc.org).
