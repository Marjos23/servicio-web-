import { AppDataSource } from "../data-source.ts";
import { Profesor } from "../domain/profesor";

export class ProfesorService {
  private repo = AppDataSource.getRepository(Profesor);

  
  async create(data: Partial<Profesor>) {
    const nuevo = this.repo.create(data);
    return await this.repo.save(nuevo);
  }

  
  async findAll() {
    return await this.repo.find({ relations: ["usuario"] });
  }

  
  async findOne(id: number) {
    return await this.repo.findOne({
      where: { id },
      relations: ["usuario"],
    });
  }

  
  async update(id: number, data: Partial<Profesor>) {
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  
  async remove(id: number) {
    return await this.repo.delete(id);
  }
}
