def on_left_pressed():
    mySprite1.set_image(img("""
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
    """))
    mySprite1.set_velocity(-40, 0)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    mySprite1.set_image(img("""
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
    """))
    mySprite1.set_velocity(40, 0)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_up_pressed():
    mySprite1.set_image(img("""
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
    """))
    mySprite1.set_velocity(0, -40)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_down_pressed():
    mySprite1.set_image(img("""
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
    """))
    mySprite1.set_velocity(0, 40)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_left_repeated():
    mySprite1.set_velocity(-40, 0)
controller.left.on_event(ControllerButtonEvent.REPEATED, on_left_repeated)

def on_right_repeated():
    mySprite1.set_velocity(40, 0)
controller.right.on_event(ControllerButtonEvent.REPEATED, on_right_repeated)

def on_up_repeated():
    mySprite1.set_velocity(0, -40)
controller.up.on_event(ControllerButtonEvent.REPEATED, on_up_repeated)

def on_down_released():
    mySprite1.set_velocity(0, 0)
controller.down.on_event(ControllerButtonEvent.RELEASED, on_down_released)

def on_left_released():
    mySprite1.set_velocity(0, 0)
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_right_released():
    mySprite1.set_velocity(0, 0)
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_up_released():
    mySprite1.set_velocity(0, 0)
controller.up.on_event(ControllerButtonEvent.RELEASED, on_up_released)

def on_down_repeated():
    mySprite1.set_velocity(0, 40)
controller.down.on_event(ControllerButtonEvent.REPEATED, on_down_repeated)

def on_hit_wall(sprite, location):
    if mySprite1.tile_kind_at(TileDirection.RIGHT, myTiles.tile1):
        game.over(True)
scene.on_hit_wall(SpriteKind.player, on_hit_wall)

mySprite1: Sprite = None
tiles.set_tilemap(tilemap("""
    level_0
"""))
mySprite1 = sprites.create(img("""
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
    """),
    SpriteKind.player)
mySprite1.set_position(10, 25)
direction1 = "N"
mysprite2 = 0
direction2 = "N"

def on_forever():
    scene.camera_follow_sprite(mySprite1)
forever(on_forever)
