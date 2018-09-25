struct Entity {
    x: usize,
    y: usize,
}

type Obstacle = Entity;
type Car = Entity;

struct Game {
    tick: usize,
    obstacles: Vec<Obstacle>,
    car: Car,
}

impl Game {
    fn update_obstacles(&mut self) {
        for obstacle in self.obstacles.iter_mut() {
            obstacle.y -= 1;
        }
        self.obstacles.retain(|o| o.y > 0)
    }

    fn update_car(&mut self, delta_x, delta_y) {
        let new_x = self.car.x + delta_x;
        let new_y = self.car.y + delta_y;

        if new_x < 100 && new_x > 0 {
            self.car.x = new_x;
        }

        if new_y < 100 && new_y > 0 {
            self.car.y = new_y;
        }
    }

    fn has_hit(&mut self) {
        let mut has_hit = false;
        for obstacle in self.obstacles {
            if abs(obstacle.x - self.car.x) < 5 && abs(obstacle.y - self.car.y) < 5 {
                return true
            }
        }
        has_hit
    }
}
