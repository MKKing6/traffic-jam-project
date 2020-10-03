controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -20)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mysprite2 == 0) {
        mySprite.setVelocity(20, 0)
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(20, 0)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, 20)
})
let mysprite2 = 0
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`1000100003030303030303030303030303030303010101010101010101010101010303030101010101010101010101010101030303030303030303030303030101010103030303030303030303030303010101030301010301010101030303030101010301010103010101010103030301010103010101010103010101010303010101030101030101030303010101010101010301010303030303030301010101010103010103030303030303030101010103030301010303030303030303030303030303010101010303030303030303030303030301010101010101010101010101020303030101010101010101010101010203030303030303030303030303030303`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . . . . . . . . 2 . . 
    . . . . . . . . . . . . . . 2 . 
    2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
    2 . . 2 . . . . 2 2 2 2 . . . 2 
    . . . 2 . . . . . 2 2 2 . . . 2 
    . . . . . 2 . . . . 2 2 . . . 2 
    . . 2 . . 2 2 2 . . . . . . . 2 
    . . 2 2 2 2 . 2 2 . . . . . . 2 
    . . 2 2 . . . . 2 2 . . . . 2 . 
    2 . . 2 2 2 2 2 . . . . . . . . 
    2 . . . . 2 2 2 2 2 2 2 2 2 2 2 
    2 2 . . . . . . . . . . . . . 2 
    2 . 2 . . . . . . . . . . . . 2 
    . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath5,myTiles.tile1,sprites.castle.tileGrass1], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f . . f f f . . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . . f f f . . . f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mysprite2 = 0
mySprite.setPosition(10, 21)
forever(function () {
    scene.cameraFollowSprite(mySprite)
})
