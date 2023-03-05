package com.example.application.endpoints.helloreact;

import com.example.application.Todo;
import com.example.application.TodoRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;

import java.util.List;

@Endpoint
@AnonymousAllowed
public class TodoEndpoints {

    private TodoRepository repository;

    TodoEndpoints(TodoRepository repository){
        this.repository = repository;
    }

    public List<Todo> findAll(){
        return repository.findAll();
    }

    public Todo add(String task){
        return repository.save(new Todo(task));
    }

    public Todo update(Todo todo){
        return repository.save(todo);
    }


}
