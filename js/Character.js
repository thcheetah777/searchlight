// Create characters using this class
class Character {
  // Initialize character
  constructor(x, y, clothesId, spritesheet, type, group, scale, phaser) {
    // Position of character
    this.x = x;
    this.y = y;

    // Types: Player, Target, Normal
    this.type = type;

    // An array of where the clothes are in the spritesheet
    // NOTE: In the character spritesheet, the length is 54 frames
    this.clothesId = clothesId;

    // The spritesheet to look in
    this.spritesheet = spritesheet;

    // Group of phaser sprites to add to
    this.group = group;

    // How big the sprite is
    this.scale = scale;

    // HACK: Pass in phaser
    this.phaser = phaser;

    // Check which type of character the character is
    switch (this.type) {
      case "target":
        this.target = true;
        break;
      case "normal":
        this.target = false;
        break;
    }

    // Main code for character
    // Create character sprite with no Y-axis gravity
    this.sprite = this.group.create(x, y, this.spritesheet);
    this.sprite.setScale(this.scale);
    this.sprite.setGravityY(-config.physics.arcade.gravity.y);

    // The skin color
    this.sprite.setFrame(this.clothesId.skin);

    // Create the clothes
    // Pants
    this.sprite.pants = this.phaser.add.image(x - 10, y, this.spritesheet).setScale(this.scale);
    this.sprite.pants.setFrame(this.clothesId.pants);

    // Shirt
    this.sprite.shirt = this.phaser.add.image(x - 3, y + 5, this.spritesheet).setScale(this.scale);
    this.sprite.shirt.setFrame(this.clothesId.shirt);

    // Hair
    this.sprite.hair = this.phaser.add.image(x - 10, y, this.spritesheet).setScale(this.scale);
    this.sprite.hair.setFrame(this.clothesId.hair);

    // Hat
    this.sprite.hat = this.phaser.add.image(x, y, this.spritesheet).setScale(this.scale);
    this.sprite.hat.setFrame(this.clothesId.hat);

    // Shield
    this.sprite.shield = this.phaser.add.image(x, y, this.spritesheet).setScale(this.scale);
    this.sprite.shield.setFrame(this.clothesId.shield);

    // Weapon
    this.sprite.weapon = this.phaser.add.image(x, y, this.spritesheet).setScale(this.scale);
    this.sprite.weapon.setFrame(this.clothesId.weapon);
  }

  // Update characters, runs in the main update function
  update() {

  }
}
