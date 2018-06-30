* [Users](#users)
  * [authenticate](#function-authenticate)
  * [create](#function-create)
  * [destroy](#function-destroy)
  * [users](#function-users)
  * [get](#function-get)
  * [exists](#function-exists)
  * [UserCreated](#event-usercreated)
  * [UserDestroyed](#event-userdestroyed)

# Users


## *function* authenticate

Users.authenticate() `view` `380c7a67`





## *function* create

Users.create(_pseudo) `nonpayable` `7368a8ce`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *bytes32* | _pseudo | undefined |


## *function* destroy

Users.destroy() `nonpayable` `83197ef0`





## *function* users

Users.users() `view` `a87430ba`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address* |  | undefined |


## *function* get

Users.get(_address) `view` `c2bc2efc`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address* | _address | undefined |


## *function* exists

Users.exists(_address) `view` `f6a3d24e`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address* | _address | undefined |

## *event* UserCreated

Users.UserCreated(_address, _pseudo) `18ec7dd8`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *address* | _address | indexed |
| *bytes32* | _pseudo | not indexed |

## *event* UserDestroyed

Users.UserDestroyed(_address) `36539d99`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *address* | _address | indexed |


---