import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TaskInformation, TaskRow, TaskFlag, TaskCode, TaskName, TaskDescription, TaskTeam } from './style';
import { AiOutlineClockCircle } from 'react-icons/ai'

const TaskCard = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskInformation>
            <TaskRow>
              <TaskFlag>{item.Flag}</TaskFlag>
              <TaskCode>
                <p>Código:</p>
                <span>{item.Code}</span>
              </TaskCode>
            </TaskRow>
            <TaskName>{item.Task}</TaskName>
            <TaskRow>
              <TaskCode>
                <p>Projeto:</p>
                <span>{item.Project}</span>
              </TaskCode>
              <TaskCode>
                <p>Prevista:</p>
                <span>
                  {new Date(item.Due_Date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                </span>
              </TaskCode>
            </TaskRow>
            <TaskDescription>
              <p>Descrição:</p>
              <p>{item.Description}</p></TaskDescription>

            <TaskRow>
              <TaskCode>
                <p>Previsto</p>
                <span><AiOutlineClockCircle/> {item.Time_Foreseen}</span>
              </TaskCode>
              {item.Situation}
            </TaskRow>

            <TaskRow>
              <TaskCode>
                <p>Saldo</p>
                <span><AiOutlineClockCircle/> {item.Time_Balance}</span>
              </TaskCode>
              <TaskTeam>
                <p>Equipe</p>
                <ul>
                  {item.Team?.map(({ member }) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </TaskTeam>
            </TaskRow>
          </TaskInformation>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
