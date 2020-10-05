controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction1 = "U"
    mySprite1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite1.setVelocity(0, -40)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite1.tileKindAt(TileDirection.Right, myTiles.tile1)) {
        game.over(true)
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (direction1 == "U") {
        mySprite1.setVelocity(0, -40)
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (direction1 == "D") {
        direction1 = "N"
        mySprite1.setVelocity(0, 0)
    }
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    if (direction1 == "R") {
        mySprite1.setVelocity(40, 0)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction1 = "L"
    mySprite1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f . . . f f f . . . 
        . . . . 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . f f f . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite1.setVelocity(-40, 0)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (direction1 == "R") {
        direction1 = "N"
        mySprite1.setVelocity(0, 0)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (direction1 == "L") {
        direction1 = "N"
        mySprite1.setVelocity(0, 0)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction1 = "R"
    mySprite1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f . . . f f f . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 . . . . 
        . . . f f f . . . f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite1.setVelocity(40, 0)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (direction1 == "U") {
        direction1 = "N"
        mySprite1.setVelocity(0, 0)
    }
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    if (direction1 == "D") {
        mySprite1.setVelocity(0, 40)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction1 = "D"
    mySprite1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite1.setVelocity(0, 40)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    if (direction1 == "L") {
        mySprite1.setVelocity(-40, 0)
    }
})
let direction1 = ""
let mySprite1: Sprite = null
tiles.setTilemap(tilemap`level_0`)
mySprite1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f . . . f f f . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . . f f f . . . f f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite1.setPosition(10, 25)
direction1 = "N"
let direction2 = "N"
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . . f 8 8 8 8 8 8 f . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2.setPosition(129, 9)
forever(function () {
    scene.cameraFollowSprite(mySprite1)
})
