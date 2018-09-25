extern crate cfg_if;
extern crate js_sys;
extern crate wasm_bindgen;

mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Clone, Copy)]
pub struct Entity {
    x: u8,
    y: u8,
}

pub type Obstacle = Entity;
pub type Car = Entity;

#[wasm_bindgen]
pub struct Game {
    obstacles: Vec<Obstacle>,
    car: Car,
    render: Vec<u8>,
}

fn in_distance(a: u8, b: u8) -> bool {
    if a > b {
        a - b < 5
    } else {
        b - a < 5
    }
}

#[wasm_bindgen]
impl Game {
    pub fn new() -> Game {
        Game {
            obstacles: Vec::new(),
            car: Car { x: 50, y: 0 },
            render: vec![0; 256],
        }
    }

    pub fn update_obstacles(&mut self) {
        for obstacle in self.obstacles.iter_mut() {
            obstacle.y -= 1;
        }
        self.obstacles.retain(|o| o.y > 0);
    }

    pub fn add_obstacle(&mut self) {
        let obstacle = Obstacle {
            x: (js_sys::Math::random() * 100.0) as u8,
            y: 100,
        };

        self.obstacles.push(obstacle);
    }

    pub fn update_car(&mut self, delta_x: u8, delta_y: u8) {
        let new_x = self.car.x + delta_x;
        let new_y = self.car.y + delta_y;

        if new_x < 100 && new_x > 0 {
            self.car.x = new_x;
        }

        if new_y < 100 && new_y > 0 {
            self.car.y = new_y;
        }
    }

    pub fn has_hit(&mut self) -> bool {
        for obstacle in self.obstacles.iter() {
            if in_distance(obstacle.x, self.car.x) && in_distance(obstacle.y, self.car.y) {
                return true;
            }
        }
        false
    }

    pub fn obstacles(&mut self) -> *const u8 {
        let mut i = 0;
        for obstacle in self.obstacles.iter() {
            self.render[i] = obstacle.x;
            i += 1;
            self.render[i] = obstacle.y;
            i += 1;
        }
        self.render.as_ptr()
    }

    pub fn get_obstacles_count(&self) -> u8 {
        self.obstacles.len() as u8
    }

    pub fn car_x(&self) -> u8 {
        self.car.x
    }

    pub fn car_y(&self) -> u8 {
        self.car.y
    }
}
