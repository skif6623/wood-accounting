
import { AllWoodState } from "../redux/features/allWoodSlice";
import { AddWoodState } from "../redux/features/addWoodSlice";

// Визначаємо тип RootState, об'єднуючи стейти всіх редюсерів
export interface RootState {
  allWood: AllWoodState;
  addWood: AddWoodState;
}