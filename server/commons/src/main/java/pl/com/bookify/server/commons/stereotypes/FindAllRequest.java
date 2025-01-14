package pl.com.bookify.server.commons.stereotypes;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.domain.Sort;

@AllArgsConstructor
@Data
public abstract class FindAllRequest {
    private String query;
    private int page;
    private Sort sort;
    private int size;
}
