# The Map

The [map](map/readme.md) will be a 16 x 16 hexagonal grid. As we explore the map we will determine the topography of the
map. Each hex will have a series of benefits.

# Topography

| Type     | Movement | Resources | Defence | Enhancements |
| -------- | -------: | --------: | ------: | -----------: |
| Ocean    |        3 |         3 |       0 |            3 |
| Desert   |        2 |         0 |       0 |       3 [^1] |
| Plain    |        1 |         1 |       0 |            3 |
| Forest   |        1 |         1 |       1 |            3 |
| Hill     |        2 |         2 |       1 |            2 |
| Mountain |        3 |         3 |       2 |            1 |
| Volcano  |        3 |         3 |       3 |            0 |

[^1]: May not be Cultivation

# Enhancements

| Type             | Construction Time | Cost | Benefit                                                         |
| ---------------- | ----------------: |-----:| --------------------------------------------------------------- |
| Fortification    |                 1 |    1 | Increase location defence by 1 to a max of 4                    |
| Cultivation      |                 1 |   -1 | Increase location resources by 1 to a max of 4                  |
| Factory          |                 2 |    2 | Allows for the creation of an additional **Order of Battle**    |
| Command Pavilion |                 3 |    2 | Allows for the addition of 2 HQ units to an **Order of Battle** |

# Terraforming

Terraforming is the act of changing one terrain type into another. When an **Order of Battle** performs the terraforming
action you have a chance to change the location one step (see the [Topography](#Topography) table above) in the
direction of your choice.

1: Moves up to two steps to Dessert or Volcano which ever is closer **Order of Battle**'s remaining actions are lost.

2: Failure nothing happens **Order of Battle**'s remaining actions are lost.

3: Failure nothing happens.

4-5: Moves one step in direction of choice.

6: Moves up to two steps in direction of choice.

# Landing Location

Upon landing on this planet choose a location that is unexplored and roll on to determine the topography.

Count out the typography of the adjacent tiles and assign the face of a D6 if not all face are assigned this way
continue up the table from the highest and looping around if necessary.

For example:

- If the tile has no explored adjacent locations the roll would be
    1. Mountain
    2. Hill
    3. Forest
    4. Plain
    5. Desert
    6. Ocean
- If there are two mountain and one forest the roll would be
    1. Mountain
    2. Mountain
    3. Forest
    4. Plain
    5. Desert
    6. Ocean
