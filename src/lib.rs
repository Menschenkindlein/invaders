extern crate cfg_if;
extern crate js_sys;
extern crate wasm_bindgen;

mod utils;

use std::collections::HashSet;
use wasm_bindgen::prelude::*;

#[derive(Eq, PartialEq, Hash, Copy, Clone)]
pub struct Entity {
    pub x: u8,
    pub y: u8,
}

type Invader = Entity;
type Tank = Entity;
type Projectile = Entity;

#[wasm_bindgen]
pub struct Game {
    invaders: Vec<Invader>,
    tank: Tank,
    projectiles: Vec<Projectile>,
    render_array: Vec<u8>,
}

#[wasm_bindgen]
pub struct Render {
    pub render_ptr: *const u8,
    pub invaders_count: u8,
    pub projectiles_count: u8,
}

fn in_distance(a: u8, b: u8, dist: u8) -> bool {
    if a > b {
        a - b < dist
    } else {
        b - a < dist
    }
}

fn collide(a: &Entity, b: &Entity) -> bool {
    in_distance(a.x, b.x, 4) && in_distance(a.y, b.y, 4)
}

#[wasm_bindgen]
impl Game {
    pub fn new() -> Game {
        Game {
            invaders: Vec::new(),
            tank: Tank { x: 50, y: 10 },
            projectiles: Vec::new(),
            render_array: vec![0; 256],
        }
    }

    pub fn update_invaders(&mut self) {
        for invader in self.invaders.iter_mut() {
            invader.y -= 1;
        }
    }

    pub fn add_invader(&mut self) {
        let invader = Invader {
            x: (js_sys::Math::random() * 100.0) as u8,
            y: 100,
        };

        self.invaders.push(invader);
    }

    pub fn update_projectiles(&mut self) {
        for projectile in self.projectiles.iter_mut() {
            projectile.y += 1;
        }
        self.projectiles.retain(|o| o.y <= 100);
    }

    pub fn collide(&mut self) {
        let mut gone_invaders = HashSet::new();
        let mut gone_projectiles = HashSet::new();

        for invader in self.invaders.iter() {
            for projectile in self.projectiles.iter() {
                if collide(invader, projectile) {
                    gone_invaders.insert(invader.clone());
                    gone_projectiles.insert(projectile.clone());
                }
            }
        }

        self.invaders.retain(|i| !gone_invaders.contains(i));
        self.projectiles.retain(|p| !gone_projectiles.contains(p));
    }

    pub fn fire(&mut self) {
        if self.projectiles.len() < 3 {
            let projectile = Projectile {
                x: self.tank.x,
                y: self.tank.y,
            };

            self.projectiles.push(projectile);
        }
    }

    pub fn update_tank(&mut self, delta_x: u8, delta_y: u8) {
        let new_x = self.tank.x + delta_x;
        let new_y = self.tank.y + delta_y;

        if new_x < 100 && new_x > 0 {
            self.tank.x = new_x;
        }

        if new_y < 100 && new_y > 0 {
            self.tank.y = new_y;
        }
    }

    pub fn is_over(&mut self) -> bool {
        for invader in self.invaders.iter() {
            if invader.y == 0 {
                return true;
            }
        }
        false
    }

    pub fn render(&mut self) -> Render {
        let mut i = 0;

        self.render_array[i] = self.tank.x;
        i += 1;
        self.render_array[i] = self.tank.y;
        i += 1;

        for invader in self.invaders.iter() {
            self.render_array[i] = invader.x;
            i += 1;
            self.render_array[i] = invader.y;
            i += 1;
        }

        for projectile in self.projectiles.iter() {
            self.render_array[i] = projectile.x;
            i += 1;
            self.render_array[i] = projectile.y;
            i += 1;
        }

        Render {
            render_ptr: self.render_array.as_ptr(),
            invaders_count: self.invaders.len() as u8,
            projectiles_count: self.projectiles.len() as u8,
        }
    }
}
