# Frequently Asked Questions

## Can I create a measure that will change the HVAC system type?

There is currently no measure to change HVAC type. We’ve avoided this because it’s technically tricky and also hard to rigorously QC for every combination of inputs. As a workaround, you can use a “save as” approach: Once you have built your model with one system and associated measures, save a copy and change the HVAC system. Then we can choose, from the two sets of results, where to transition from baseline to proposed HVAC. Generally after architectural and lighting measures but before HVAC efficiency and controls measures. We're working on features that will make this all easier and more intuitive.

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

This functionality is not currently available. However if there is a location you'd like to see support, please let us know by contacting [tools@slipstreaminc.org](mailto:tools@slipstreaminc.org).
